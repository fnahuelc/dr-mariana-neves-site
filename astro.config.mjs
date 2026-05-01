import { defineConfig } from 'astro/config';

const repositoryName = 'dr-mariana-neves-site';
const githubUsername = 'fnahuelc';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  // Replace these values if the repository name or GitHub username changes.
  site: `https://${githubUsername}.github.io`,
  base: isGitHubPagesBuild ? `/${repositoryName}` : '/',
  output: 'static',
  vite: {
    // Redirect Vite's cache outside OneDrive to avoid EPERM sync conflicts
    cacheDir: 'C:/Users/NahuelCacavelos/AppData/Local/Temp/vite-dr-mariana',
    server: {
      watch: {
        usePolling: false,
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**']
      }
    }
  }
});