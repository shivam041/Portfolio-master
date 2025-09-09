// GitHub configuration for auto-updating projects
export const GITHUB_CONFIG = {
  // Your GitHub username
  USERNAME: 'shivam041',
  
  // Custom project images mapping
  // You can override the default images for specific repositories
  CUSTOM_IMAGES: {
    'shivpicks': 'https://raw.githubusercontent.com/shivam041/shivpicks/main/screenshot.png',
    'Data-Stuctures-and-Algorithms-Visualizer': 'https://raw.githubusercontent.com/shivam041/Data-Stuctures-and-Algorithms-Visualizer/main/screenshot.png',
    'Chess': 'https://raw.githubusercontent.com/shivam041/Chess/main/screenshot.png',
    'Stock-Analyzer': 'https://raw.githubusercontent.com/shivam041/Stock-Analyzer/main/screenshot.png',
    'To-Do-List': 'https://raw.githubusercontent.com/shivam041/To-Do-List/main/screenshot.png',
    'music-studio': 'https://raw.githubusercontent.com/shivam041/music-studio/main/screenshot.png',
    'Chatbot': 'https://raw.githubusercontent.com/shivam041/Chatbot/main/screenshot.png',
  },
  
  // Repositories to exclude from the auto-generated list
  EXCLUDED_REPOS: [
    'Portfolio-master', // Your portfolio repository
    'shivam041', // Your username repository if it exists
  ],
  
  // Repositories to prioritize (will appear first)
  PRIORITIZED_REPOS: [
    'shivpicks',
    'Data-Stuctures-and-Algorithms-Visualizer',
    'RiseApp',
    'To-Do-List',
    'Stock-Analyzer',
    'Chess',
    'music-studio',
    'Chatbot',
    'knowledge-graph-search-engine',
    'Game-of-Life',
    'NBA-Analysis',
  ],
  
  // Maximum number of repositories to display
  MAX_REPOS: 20,
  
  // Show all repositories (bypass most filtering)
  SHOW_ALL_REPOS: false,
  
  // Cache duration in milliseconds (5 minutes)
  CACHE_DURATION: 5 * 60 * 1000,
  
  // Default images for different project types
  DEFAULT_IMAGES: {
    react: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    python: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
    java: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop',
    mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    'data-science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    web: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    default: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
  }
};
