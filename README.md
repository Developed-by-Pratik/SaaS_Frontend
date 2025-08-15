# SaaS Frontend

A modern React + Vite frontend for SaaS authentication, featuring login, signup, password reset, and Google OAuth integration.

## Features

- React 19 + Vite for fast development and HMR
- Authentication UI (login, signup, password reset)
- Google OAuth integration
- Responsive, glassmorphic design
- ESLint for code quality
- Proxy setup for backend API requests

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## API Proxy

API requests to `/api/*` are proxied to `http://localhost:8080` (see [`vite.config.js`](vite.config.js)).  
Update the target URL if your backend runs elsewhere.

## Project Structure

```
src/
  components/
    AuthPage.jsx      # Main authentication component
    AuthPage.css      # Styles for AuthPage
  App.jsx             # Root component
  App.css             # App-level styles
  main.jsx            # Entry point
  index.css           # Global styles
public/
  index.html          # HTML template
```

## Linting

Run ESLint:

```sh
npm run lint
```

## Customization

- Update API endpoints in [`AuthPage.jsx`](src/components/AuthPage.jsx) as needed.
- Modify styles in [`AuthPage.css`](src/components/AuthPage.css) for branding.

## License

MIT

---

*Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)*
