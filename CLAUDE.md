# Project: Second Website

## Overview

A split frontend/backend web project. The frontend is a Vite + React SPA (designed to host v0-generated UI). The backend is a Node.js + Express API that handles contact form submissions.

## Project Structure

```
/
├── frontend/         # Vite + React SPA
│   ├── src/
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # React entry point
│   │   ├── styles.css          # Global styles
│   │   └── components/         # React components (e.g. ContactForm)
│   ├── index.html
│   └── vite.config.mts         # Vite config; proxies /api → localhost:5000
└── backend/          # Node.js + Express API
    └── src/
        └── index.js            # Express server entry point
```

## Dev Servers

| Service  | Command (from its directory) | Port |
|----------|------------------------------|------|
| Frontend | `npm run dev`                | 5173 |
| Backend  | `npm run dev`                | 5000 |

The Vite dev server proxies all `/api` requests to the backend at `http://localhost:5000`.

## Key Conventions

- **Contact form**: POSTs `{ name, phone, message }` to `/api/messages`.
- **v0 code**: Paste generated React UI into `frontend/src/App.jsx` or add components under `frontend/src/components/`.
- Use `nodemon` (backend dev script) for hot-reload during backend development.
- No TypeScript — the frontend uses plain `.jsx` files.

## Commands

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && npm install && npm run dev
```
