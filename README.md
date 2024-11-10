<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
Fitness Tracker Web App - MVP
</h1>
<h4 align="center">A comprehensive fitness tracker web application built with React, Node.js, and MongoDB for goal setting, progress tracking, and a supportive community.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="Framework - React - blue">
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend - Javascript, Html, Css - red">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend - Node.js - blue">
  <img src="https://img.shields.io/badge/Database-MongoDB-green" alt="Database - MongoDB - green">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/Fitness-Tracker-React-Node-MVP?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/Fitness-Tracker-React-Node-MVP?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/Fitness-Tracker-React-Node-MVP?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository houses the Fitness Tracker web application - a powerful and user-friendly platform built with React, Node.js, and MongoDB. Designed to empower fitness enthusiasts of all levels, the Fitness Tracker provides a robust environment for setting personalized goals, tracking progress, and connecting with a supportive community.

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🔐 | **Secure Authentication**   | Users can create accounts and securely log in using email/password or social media integration (Google, Facebook), safeguarding personal data and enhancing user experience. |
| 🎯 | **Personalized Goal Setting**       | Set individual fitness goals, including weight, exercise frequency, distance, or specific milestones, providing a clear roadmap for progress.          |
| 📈 | **Comprehensive Progress Tracking**   | Log workouts, meals, and activities. The app calculates and displays progress toward goals in visually appealing charts and graphs for motivation and accountability. |
| 🤝 | **Social Sharing and Community Building**     | Connect with friends, share progress, and achievements, fostering a sense of community, encouraging healthy competition, and providing support.     |
| 🌐 | **Responsive Design**       | The application is fully responsive, adapting seamlessly to various devices (mobile, tablet, desktop) for a user-friendly experience across all screens.  |
| ⚡️ | **Performance**    | Optimized for speed and responsiveness for a seamless user experience.                                                  |
| 🔄 | **Scalability**    | Designed to handle a growing user base and increasing data volume.                                                     |
| 🔒 | **Security**       | Robust security measures including data encryption and secure authentication to ensure user trust and confidence.             |

## 📂 Structure
```text
fitness-tracker/
├── apps/
│   ├── web/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── styles/
│   │   │   └── utils/
│   │   ├── next.config.js
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── admin/
│       └── src/
│           └── pages/
│               ├── login/
│               └── dashboard/
├── packages/
│   └── ui/
│       └── src/
│           └── components/
│               └── Button/
└── .eslintrc.js

```

## 💻 Installation

### 🔧 Prerequisites
- Node.js v16+
- npm 6+
- MongoDB 5+
- Git 2.x+

### 🚀 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/coslynx/Fitness-Tracker-React-Node-MVP.git
   cd Fitness-Tracker-React-Node-MVP
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up MongoDB:
   - [Install MongoDB](https://www.mongodb.com/docs/manual/installation/) if you haven't already.
   - Start the MongoDB server.
   - Create a database named "fitness_tracker".
4. Configure environment variables:
   - Create a `.env` file in the root directory:
     ```bash
     cp .env.example .env
     ```
   - Update the following variables in the `.env` file:
     ```
     # MongoDB Connection Details
     MONGODB_URI=mongodb://localhost:27017/fitness_tracker 

     # JWT Secret Key
     JWT_SECRET=averylongandrandomsecretkeythatisverydifficulttoguess 

     # Next.js API URL
     NEXT_PUBLIC_API_URL=http://localhost:3000/api
     ```

## 🏗️ Usage

### 🏃‍♂️ Running the MVP
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Access the application:
   - Web interface: [http://localhost:3000](http://localhost:3000)
   - API endpoint: [http://localhost:3000/api](http://localhost:3000/api)

### ⚙️ Configuration
- The `.env` file is used to configure environment-specific settings.
- See the comments in `.env` for details on each variable and how to modify them.

### 📚 Examples

- 📝 **User Registration**: 
  ```bash
  curl -X POST http://localhost:3000/api/auth/register               -H "Content-Type: application/json"               -d '{"username": "newuser", "email": "user@example.com", "password": "securepass123"}'
  ```

- 📝 **Setting a Fitness Goal**: 
  ```bash
  curl -X POST http://localhost:3000/api/goals               -H "Content-Type: application/json"               -H "Authorization: Bearer YOUR_JWT_TOKEN"               -d '{"type": "weight_loss", "target": 10, "deadline": "2023-12-31"}'
  ```

- 📝 **Logging Progress**: 
  ```bash
  curl -X POST http://localhost:3000/api/progress               -H "Content-Type: application/json"               -H "Authorization: Bearer YOUR_JWT_TOKEN"               -d '{"goalId": "goal_id_here", "value": 2, "date": "2023-06-15"}'
  ```

## 🌐 Hosting

### 🚀 Deployment Instructions

#### Deploying to Vercel
1. Create a Vercel account (if you don't have one): [https://vercel.com/](https://vercel.com/)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Initialize Vercel project:
   ```bash
   vercel init
   ```
5. Choose a project name (e.g., "fitness-tracker-mvp").
6. Deploy the application:
   ```bash
   vercel deploy
   ```
7. Configure environment variables in the Vercel dashboard (https://vercel.com/dashboard).
8. The deployment will be accessible at a unique URL provided by Vercel.

### 🔑 Environment Variables

- **`MONGODB_URI`**: Connection string for your MongoDB database (found in your MongoDB cluster settings).
- **`JWT_SECRET`**: A long, randomly generated secret key for JWT token generation.
- **`NEXT_PUBLIC_API_URL`**: URL of your deployed API server. 

## 📜 API Documentation

### 🔍 Endpoints

- **POST /api/auth/register**
  - Description: Register a new user.
  - Body: `{ "username": string, "email": string, "password": string }`
  - Response: `{ "id": string, "username": string, "email": string, "token": string }`

- **POST /api/auth/login**
  - Description: Login an existing user.
  - Body: `{ "email": string, "password": string }`
  - Response: `{ "token": string, "user": { "id": string, "username": string, "email": string } }`

- **GET /api/users/me**
  - Description: Get authenticated user data.
  - Headers: `Authorization: Bearer YOUR_JWT_TOKEN`
  - Response: `{ "id": string, "username": string, "email": string }`

- **POST /api/goals**
  - Description: Create a new fitness goal.
  - Headers: `Authorization: Bearer YOUR_JWT_TOKEN`
  - Body: `{ "type": string, "target": number, "deadline": date }`
  - Response: `{ "id": string, "type": string, "target": number, "deadline": date, "progress": number }`

- **GET /api/goals**
  - Description: Get all goals for the authenticated user.
  - Headers: `Authorization: Bearer YOUR_JWT_TOKEN`
  - Response: `[ { "id": string, "type": string, "target": number, "deadline": date, "progress": number } ]`

- **PUT /api/goals/:goalId**
  - Description: Update an existing fitness goal.
  - Headers: `Authorization: Bearer YOUR_JWT_TOKEN`
  - Body: `{ "type": string, "target": number, "deadline": date }`
  - Response: `{ "id": string, "type": string, "target": number, "deadline": date, "progress": number }`

- **DELETE /api/goals/:goalId**
  - Description: Delete a fitness goal.
  - Headers: `Authorization: Bearer YOUR_JWT_TOKEN`
  - Response: `{ "message": "Goal deleted successfully" }`

- **POST /api/activities**
  - Description: Log a new activity.
  - Headers: `Authorization: Bearer YOUR_JWT_TOKEN`
  - Body: `{ "type": string, "date": date, "duration": number, "caloriesBurned": number, "distance": number }`
  - Response: `{ "id": string, "type": string, "date": date, "duration": number, "caloriesBurned": number, "distance": number }`

### 🔒 Authentication

1. **Register a new user or login** to receive a JWT token.
2. **Include the token in the `Authorization` header for all protected routes:**
   ```
   Authorization: Bearer YOUR_JWT_TOKEN
   ```
3. **Token expiration and refresh process:** The JWT token has a limited lifetime. When it expires, the client should request a new token using a refresh token.

### 📝 Examples

```bash
# Register a new user
curl -X POST http://localhost:3000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"username": "fitnessuser", "email": "user@example.com", "password": "securepass123"}'

# Response
{
  "id": "user123",
  "username": "fitnessuser",
  "email": "user@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

# Login an existing user
curl -X POST http://localhost:3000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email": "user@example.com", "password": "securepass123"}'

# Response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user123",
    "username": "fitnessuser",
    "email": "user@example.com"
  }
}

# Get authenticated user data
curl -X GET http://localhost:3000/api/users/me \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Response
{
  "id": "user123",
  "username": "fitnessuser",
  "email": "user@example.com"
}

# Create a new goal
curl -X POST http://localhost:3000/api/goals \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{"type": "weight_loss", "target": 10, "deadline": "2023-12-31"}'

# Response
{
  "id": "goal123",
  "type": "weight_loss",
  "target": 10,
  "deadline": "2023-12-31",
  "progress": 0
}
```


## 📜 License & Attribution

### 📄 License
This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.

### 🤖 AI-Generated MVP
This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).

No human was directly involved in the coding process of the repository: Fitness-Tracker-React-Node-MVP

### 📞 Contact
For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
- Website: [CosLynx.com](https://coslynx.com)
- Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
  <img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>