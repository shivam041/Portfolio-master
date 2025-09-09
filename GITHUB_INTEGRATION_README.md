# GitHub Auto-Update Projects Integration

This integration automatically fetches your GitHub repositories and displays them as project cards on your portfolio's Projects page.

## Features

- 🔄 **Auto-updates**: Fetches latest repositories from GitHub API
- 🎨 **Smart images**: Automatically assigns relevant images based on project type
- ⭐ **Rich metadata**: Shows stars, forks, languages, topics, and last updated
- 🚀 **Live demos**: Automatically detects and links to live demos
- ⚡ **Caching**: 5-minute cache to reduce API calls
- 🎯 **Customizable**: Easy configuration for exclusions and priorities

## Setup

### 1. Update GitHub Username

Edit `src/config/githubConfig.js` and update the `USERNAME` field:

```javascript
export const GITHUB_CONFIG = {
  USERNAME: 'your-github-username', // Change this
  // ... rest of config
};
```

### 2. Customize Project Images

You can add custom images for specific repositories:

```javascript
CUSTOM_IMAGES: {
  'your-repo-name': require('../../Assets/Projects/your-image.jpg'),
  'another-repo': 'https://example.com/image.jpg',
},
```

### 3. Configure Repository Filtering

**Exclude repositories** you don't want to show:

```javascript
EXCLUDED_REPOS: [
  'Portfolio-master', // Your portfolio repo
  'test-repo',        // Any other repos to hide
],
```

**Prioritize repositories** to show them first:

```javascript
PRIORITIZED_REPOS: [
  'your-best-project',
  'another-important-project',
],
```

### 4. Adjust Display Settings

```javascript
MAX_REPOS: 12,                    // Maximum projects to show
CACHE_DURATION: 5 * 60 * 1000,   // Cache duration (5 minutes)
```

## How It Works

### 1. Data Fetching
- Fetches repositories from GitHub API using your username
- Applies filters to exclude unwanted repositories
- Sorts by priority, stars, and last updated date

### 2. Image Assignment
- First checks for custom images in `CUSTOM_IMAGES`
- Then assigns default images based on:
  - Repository topics
  - Primary programming language
  - Project type keywords

### 3. Demo Link Detection
- Automatically detects live demos from:
  - Repository topics containing "demo" or "live"
  - Description text mentioning common hosting platforms
  - GitHub Pages URLs

### 4. Caching
- Caches results for 5 minutes to reduce API calls
- Automatically refreshes when cache expires
- Manual refresh button available

## Customization Options

### Default Images by Project Type

The system automatically assigns images based on project characteristics:

- **React/JavaScript/TypeScript** → React-themed image
- **Python** → Python-themed image  
- **Java** → Java-themed image
- **Mobile/React Native** → Mobile app image
- **Data Science/ML** → Data science image
- **Web/Frontend** → Web development image
- **Default** → Generic coding image

### Repository Filtering Logic

Repositories are filtered out if they:
- Are in the `EXCLUDED_REPOS` list
- Are forks with less than 5 stars
- Have no description
- Are older than 2 years with less than 3 stars

### Sorting Priority

1. Repositories in `PRIORITIZED_REPOS` (in order)
2. By star count (descending)
3. By last updated date (descending)

## Error Handling

- **API Errors**: Shows error message with retry button
- **No Repositories**: Shows info message if no repos found
- **Loading States**: Shows spinner while fetching data
- **Cache Fallback**: Uses cached data if API fails

## Performance

- **Caching**: Reduces API calls with 5-minute cache
- **Lazy Loading**: Only fetches when Projects page is visited
- **Image Optimization**: Uses optimized Unsplash images
- **Responsive**: Cards adapt to different screen sizes

## Troubleshooting

### Common Issues

1. **No projects showing**: Check if your GitHub username is correct
2. **Wrong images**: Add custom images to `CUSTOM_IMAGES`
3. **Missing demos**: Add demo URLs to repository descriptions or topics
4. **API rate limits**: The GitHub API has rate limits for unauthenticated requests

### GitHub API Rate Limits

- **Unauthenticated**: 60 requests per hour per IP
- **Authenticated**: 5,000 requests per hour per user

For higher limits, you can add a GitHub token to the API calls.

## Future Enhancements

- Add GitHub authentication for higher rate limits
- Support for private repositories
- Custom project descriptions override
- More sophisticated demo link detection
- Repository statistics and insights
- Integration with GitHub Actions for deployment status

## Files Created/Modified

- `src/services/githubService.js` - GitHub API integration
- `src/components/Projects/GitHubProjects.js` - Main component
- `src/components/Projects/GitHubProjectCard.js` - Project card component
- `src/config/githubConfig.js` - Configuration file
- `src/components/Projects/Projects.js` - Updated to use GitHub integration

The integration is now ready to use! Your Projects page will automatically display your GitHub repositories with rich metadata and smart image assignment.
