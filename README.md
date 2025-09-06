text
# SynergySphere Full-Stack Project

## Overview

SynergySphere is a project management application built as a full-stack web app with:

- **Backend:** Node.js, Express, Sequelize ORM, JWT authentication, and SQLite (configurable)
- **Frontend:** React.js, Vite, React Router, Axios for API calls

This README provides setup and usage instructions for both backend and frontend.

## Backend

### Technology Stack

- Node.js
- Express.js
- Sequelize ORM (with SQLite or other SQL databases)
- JWT for authentication
- dotenv for environment variables
- CORS, Morgan for logging

### Setup Instructions

1. Go to the backend folder:
cd backend

2. Install dependencies:
npm install

3. Create a `.env` file in the backend root, example contents:
PORT=5000
DATABASE_URL=sqlite:./database.sqlite
JWT_SECRET=your_secret_key_here
4. Run backend development server:
npm run dev

5. Backend API will run at:
http://localhost:5000/api


## Frontend

### Technology Stack

- React.js with functional components and hooks
- Vite as the build and dev server
- React Router v6 for routing
- Axios for HTTP requests to backend API

### Setup Instructions

1. Go to the frontend folder:
cd frontend
2. Install dependencies:
npm install
3. Create a `.env` file in the frontend root with backend API URL:
VITE_API_BASE_URL=http://localhost:5000/api
4. Run frontend development server:
npm run dev
5. Access the frontend app in your browser at:
http://localhost:5173

## Usage

- Register a user on the Signup page.
- Log in using your credentials to obtain a JWT token.
- Access protected routes like project and task management.
- The frontend automatically attaches the JWT token to API requests after login.

---

## Important Notes

- Make sure the backend server is running before starting the frontend, so API calls succeed.
- Do **not** commit `.env` files to version control; keep secrets safe.
- Use `.gitignore` to exclude `node_modules`, `.env`, and other unwanted files.
- For database schema changes, prefer migrations rather than direct sync with `alter: true` to preserve data.
- Error handling is centralized via backend middleware for consistent API error responses.


## Contact

For questions, issues, or contributions, please open an issue or contact the maintainer.
