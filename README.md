# iyf-s10-week-012-odhiambowalker
develop a login app

# CommunityHub

A full-stack community platform built with React, Express, and MongoDB.

## Features
- User registration and authentication
- Create and view posts
- Comment on posts
- Protected routes for authenticated users
- Responsive design

## Tech Stack
- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Installation

1. Clone the repository
```bash
   git clone https://github.com/odhiambowalker/iyf-s10-week-012-odhiambowalker.git
   cd iyf-s10-week-012-odhiambowalker/iyf-s10-week-12-odhiambowalker
```

2. Install backend dependencies
```bash
   cd backend
   npm install
```

3. Install frontend dependencies
```bash
   cd ../frontend
   npm install
```

4. Set up environment variables
```bash
   cd ../backend
   cp .env.example .env
   # Edit .env with your values
```

5. Run development servers
```bash
   # Terminal 1 - Backend
   cd backend && npm run dev

   # Terminal 2 - Frontend
   cd frontend && npm run dev
```

## API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (auth required)

### Comments
- `GET /api/posts/:postId/comments` - Get comments for a post
- `POST /api/posts/:postId/comments` - Add comment (auth required)

## Authors
- Grace
- Maureen
- Morgan
- 
- 
