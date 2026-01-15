# Task Management System

## Overview

A full-stack web application for managing tasks efficiently. The Task Management System allows users to create, organize, and track their tasks with features like priority levels, status tracking, categories, and due dates. Built with a modern MERN (MongoDB, Express, React, Node.js) stack, this application provides a responsive and intuitive interface for productivity enhancement.

## Live Links
- Backend (Render): https://task-management-system-5nk4.onrender.com/
- API Docs (Swagger): https://task-management-system-5nk4.onrender.com/api-docs
- Frontend (Vercel): https://task-management-system-kappa-ten.vercel.app/dashboard

## Features Implemented

### User Authentication
- User registration and login
- JWT-based authentication
- Protected routes
- Secure password storage with bcryptjs

### Task Management
- Create, read, update, delete tasks (CRUD)
- Task categories/tags
- Priority levels (High, Medium, Low)
- Due date functionality
- Task status (Pending, In Progress, Completed)

### Dashboard
- Task statistics and overview
- Filter tasks by status, priority, or category
- Search functionality
- Responsive design
- Real-time updates

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React.js** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Context API** - State management

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Backend

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev  # for development with nodemon
npm start   # for production
```

The server will run on `http://localhost:5000`

### Frontend

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the client directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Tasks
- `GET /api/tasks` - Get all tasks (with optional filters)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/:id` - Get specific task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats` - Get task statistics

## Features in Detail

### Task Filters
- Filter by status (Pending, In Progress, Completed)
- Filter by priority (Low, Medium, High)
- Filter by category
- Search by title or description

### Statistics Dashboard
- Total tasks count
- Tasks by status (Pending, In Progress, Completed)
- Tasks by priority (Low, Medium, High)

### Task Management
- Inline editing of tasks
- Quick status change buttons
- Delete tasks with confirmation
- Set and view due dates
- Organize with categories

## Security Features
- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes
- Secure token storage in localStorage
- CORS enabled for cross-origin requests

## Future Enhancements
- Email notifications for due dates
- Task recurring/reminders
- Collaborative task sharing
- Task attachments
- Calendar view
- Mobile app
- Dark mode
- Advanced analytics

## Tech Stack Explanation

### Frontend Technologies
- **React.js** - A JavaScript library for building user interfaces with reusable components. React's component-based architecture makes it easy to maintain and scale the application. We use functional components with hooks for state management.
- **React Router** - Enables client-side navigation without full page reloads, providing a seamless single-page application (SPA) experience.
- **Tailwind CSS** - A utility-first CSS framework that allows rapid UI development with predefined classes, ensuring consistent styling across the application.
- **Axios** - A promise-based HTTP client that simplifies API requests and includes features like interceptors for automatic token management.
- **Context API** - Built-in React feature for state management without third-party libraries, perfect for this application's authentication needs.

### Backend Technologies
- **Express.js** - A lightweight web framework for Node.js that provides routing, middleware support, and easy integration with MongoDB.
- **MongoDB** - A flexible NoSQL database that stores data in JSON-like documents, perfect for applications with evolving schemas.
- **Mongoose** - An Object Data Modeling (ODM) library that provides schema validation, data relationships, and convenient methods for database operations.
- **JWT (jsonwebtoken)** - Stateless authentication mechanism that creates secure tokens containing user information, enabling secure API access.
- **bcryptjs** - A library for hashing passwords securely, ensuring user credentials are protected even if the database is compromised.

### Development & DevOps
- **Nodemon** - Automatically restarts the server when files change, improving development workflow.
- **Concurrently** - Runs multiple npm scripts simultaneously, allowing developers to run frontend and backend with one command.
- **CORS** - Middleware that handles cross-origin requests, allowing the frontend to communicate with the backend.

## Challenges and Solutions

### Challenge 1: Authentication State Management Across Components
**Problem:** Maintaining user authentication state across the entire React application was complex. The token needed to be persisted in localStorage, validated on app load, and accessible to all components making API requests. Additionally, components needed to know whether a user was authenticated to conditionally render content and protect routes.

**Solution:** Implemented React Context API (AuthContext) to centrally manage authentication state. This context provider wraps the entire application and exposes functions for login, logout, and token retrieval. The context automatically checks for a stored token on app initialization, significantly simplifying component logic and reducing prop-drilling. This approach also enabled automatic token inclusion in all API requests through an axios interceptor. When a user logs in, the token is saved to localStorage and the context is updated. On app reload, the context automatically reads the token from localStorage, restoring the user's authenticated state without requiring them to log in again.

### Challenge 2: JWT Token Expiration and Unauthorized Access Handling
**Problem:** JWT tokens have expiration times for security, but the application didn't gracefully handle expired tokens. Users would experience cryptic 401 errors without being redirected to login or informed about what happened. This caused poor user experience when tokens expired during a session.

**Solution:** Implemented comprehensive error handling in the axios API client with an interceptor that catches 401 responses and automatically redirects users to the login page. Additionally, added client-side validation to check token expiration before making requests. When a 401 response is detected, the interceptor clears the token from localStorage and redirects to the login page, providing a seamless user experience where expired tokens are handled transparently. Error messages inform users when they need to re-authenticate, avoiding confusion and improving usability.
