# GitHub Profile Explorer

A React + Vite app that lets users search for a GitHub profile and view key account details, stats, and repositories in a clean dark-themed dashboard.

## Features

- Search GitHub users by username
- Display profile information such as name, bio, location, portfolio URL, and join date
- Show follower, following, and repository counts
- List the user's repositories in reusable cards
- Open the profile directly on GitHub
- UI built with React and Tailwind CSS

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Lucide React icons
- GitHub REST API

## Project Structure

- src/App.jsx — app entry point
- frontend/SearchPage.jsx — main search UI and GitHub API logic
- frontend/components/RepoCard.jsx — repository card component
- public/ — static assets
- src/images/ — local image assets

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Usage

1. Enter a GitHub username in the search box.
2. Click Search.
3. The app fetches the user profile and repositories from the GitHub API.
4. Review the stats and repository list shown on the page.

## Notes

This app uses GitHub's public REST API, so it works for public profiles. User and repository data are fetched at runtime, and the app shows an error message if a username is invalid or a request fails.

## License

This project is for educational/demo purposes.

