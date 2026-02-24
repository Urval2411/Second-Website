## Project Overview

This project is split into two parts:

- **frontend**: Vite + React single-page app where you can paste your v0-generated UI.
- **backend**: Node.js + Express API to receive messages from the contact form.

### Getting Started

#### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

#### Frontend (Vite + React)

1. Open a terminal in this project root.
2. Install dependencies:
   - `cd frontend`
   - `npm install`
3. Start the dev server:
   - `npm run dev`
4. Open the URL shown in the terminal (usually `http://localhost:5173`).

#### Backend (Node + Express)

1. Open a second terminal in this project root.
2. Install dependencies:
   - `cd backend`
   - `npm install`
3. Start the server:
   - `npm run dev`
4. The API will run on `http://localhost:5000` by default.

### Where to Paste Your v0 Code

- **React UI code from v0**:
  - Paste your main page/layout into `frontend/src/App.jsx` or create your own components in `frontend/src/components/`.
  - Update routes or structure as needed.
- **Contact form logic**:
  - Use the existing `ContactForm` component in `frontend/src/components/ContactForm.jsx` as a starting point.
  - It is already wired to POST `name`, `phone`, and `message` to the backend at `/api/messages`.

You can freely replace the placeholder components with your own v0-generated React components while keeping the same folder structure.

