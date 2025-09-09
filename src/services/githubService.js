// GitHub API service for fetching repository data
import { GITHUB_CONFIG } from '../config/githubConfig';

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = GITHUB_CONFIG.USERNAME;

// Cache for storing fetched data
let repositoriesCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = GITHUB_CONFIG.CACHE_DURATION;

// Function to get default project images based on repository topics or languages
const getDefaultImage = (repo) => {
  // Check for custom image first
  if (GITHUB_CONFIG.CUSTOM_IMAGES[repo.name]) {
    return GITHUB_CONFIG.CUSTOM_IMAGES[repo.name];
  }
  
  const topics = repo.topics || [];
  const language = repo.language?.toLowerCase() || '';
  
  // Check for specific topics or languages to determine image
  if (topics.includes('react') || language.includes('javascript') || language.includes('typescript')) {
    return GITHUB_CONFIG.DEFAULT_IMAGES.react;
  }
  if (topics.includes('python') || language.includes('python')) {
    return GITHUB_CONFIG.DEFAULT_IMAGES.python;
  }
  if (topics.includes('java') || language.includes('java')) {
    return GITHUB_CONFIG.DEFAULT_IMAGES.java;
  }
  if (topics.includes('mobile') || topics.includes('react-native')) {
    return GITHUB_CONFIG.DEFAULT_IMAGES.mobile;
  }
  if (topics.includes('data-science') || topics.includes('machine-learning')) {
    return GITHUB_CONFIG.DEFAULT_IMAGES['data-science'];
  }
  if (topics.includes('web') || topics.includes('frontend')) {
    return GITHUB_CONFIG.DEFAULT_IMAGES.web;
  }
  
  // Default image
  return GITHUB_CONFIG.DEFAULT_IMAGES.default;
};

// Function to clean and format repository description
const formatDescription = (repo) => {
  let description = repo.description || 'No description available';
  
  // Truncate if too long
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }
  
  return description;
};

// Function to determine if repository has a live demo
const getDemoLink = (repo) => {
  // Check for common demo URL patterns in topics or description
  const topics = repo.topics || [];
  const description = (repo.description || '').toLowerCase();
  
  // Look for common demo indicators
  if (topics.includes('demo') || topics.includes('live') || 
      description.includes('demo') || description.includes('live') ||
      description.includes('vercel') || description.includes('netlify') ||
      description.includes('heroku') || description.includes('github.io')) {
    
    // Try to construct demo URL from common patterns
    if (description.includes('vercel.app')) {
      const match = description.match(/(https?:\/\/[^\s]+\.vercel\.app)/);
      if (match) return match[1];
    }
    if (description.includes('netlify.app')) {
      const match = description.match(/(https?:\/\/[^\s]+\.netlify\.app)/);
      if (match) return match[1];
    }
    if (description.includes('github.io')) {
      return `https://${USERNAME}.github.io/${repo.name}`;
    }
  }
  
  return null;
};

// Function to filter and prioritize repositories
const filterRepositories = (repos) => {
  return repos
    .filter(repo => {
      // Always filter out excluded repositories
      if (GITHUB_CONFIG.EXCLUDED_REPOS.includes(repo.name)) return false;
      
      // If SHOW_ALL_REPOS is true, only apply minimal filtering
      if (GITHUB_CONFIG.SHOW_ALL_REPOS) {
        return true;
      }
      
      // Filter out forked repositories unless they have significant changes
      if (repo.fork && repo.stargazers_count < 3) return false;
      
      // Only filter out repositories with no description if they also have no stars and are not prioritized
      const isPrioritized = GITHUB_CONFIG.PRIORITIZED_REPOS.includes(repo.name);
      if ((!repo.description || repo.description.trim() === '' || repo.description === 'undefined') && repo.stargazers_count === 0 && !isPrioritized) return false;
      
      // Filter out very old repositories (older than 3 years) unless they have stars or are prioritized
      const threeYearsAgo = new Date();
      threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
      const repoDate = new Date(repo.updated_at);
      
      if (repoDate < threeYearsAgo && repo.stargazers_count < 2 && !isPrioritized) return false;
      
      return true;
    })
    .sort((a, b) => {
      // Prioritize specific repositories
      const aPriority = GITHUB_CONFIG.PRIORITIZED_REPOS.indexOf(a.name);
      const bPriority = GITHUB_CONFIG.PRIORITIZED_REPOS.indexOf(b.name);
      
      if (aPriority !== -1 && bPriority !== -1) {
        return aPriority - bPriority;
      }
      if (aPriority !== -1) return -1;
      if (bPriority !== -1) return 1;
      
      // Sort by stars first, then by last updated
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at) - new Date(a.updated_at);
    })
    .slice(0, GITHUB_CONFIG.MAX_REPOS); // Limit to configured number of repositories
};

// Main function to fetch repositories
export const fetchRepositories = async () => {
  // Check cache first
  if (repositoriesCache && cacheTimestamp && 
      (Date.now() - cacheTimestamp) < CACHE_DURATION) {
    return repositoriesCache;
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Debug: Log all repositories
    console.log('All repositories from GitHub:', repos.map(r => ({ name: r.name, stars: r.stargazers_count, fork: r.fork, description: r.description?.substring(0, 50) + '...' })));
    
    // Filter and process repositories
    const filteredRepos = filterRepositories(repos);
    
    // Debug: Log filtered repositories
    console.log('Filtered repositories:', filteredRepos.map(r => ({ name: r.name, stars: r.stargazers_count, fork: r.fork, description: r.description?.substring(0, 50) + '...' })));
    
    // Transform data for our component
    const processedRepos = filteredRepos.map(repo => ({
      id: repo.id,
      title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: formatDescription(repo),
      ghLink: repo.html_url,
      demoLink: getDemoLink(repo),
      imgPath: getDefaultImage(repo),
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at,
      topics: repo.topics || [],
      isBlog: false
    }));
    
    // Cache the results
    repositoriesCache = processedRepos;
    cacheTimestamp = Date.now();
    
    return processedRepos;
    
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    
    // Return cached data if available, even if expired
    if (repositoriesCache) {
      return repositoriesCache;
    }
    
    // Return empty array as fallback
    return [];
  }
};

// Function to get repository statistics
export const getRepositoryStats = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const user = await response.json();
    
    return {
      totalRepos: user.public_repos,
      totalStars: user.public_gists,
      followers: user.followers,
      following: user.following
    };
    
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
};
