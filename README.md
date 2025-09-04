# Todo Application

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-18.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-4.18.0-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-6.0.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
</div>

<div align="center">
  <h3>📝 A full-stack MERN Todo application with user authentication</h3>
  <p>Built with React (Vite) + Tailwind CSS frontend and Node.js + Express + MongoDB backend</p>
</div>

---

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [📋 Prerequisites](#-prerequisites)
- [⚡ Installation & Setup](#-installation--setup)
- [🔧 Available Scripts](#-available-scripts)
- [📖 API Endpoints](#-api-endpoints)
- [📱 Usage](#-usage)
- [🔒 Authentication](#-authentication)
- [🗃️ Database Schema](#️-database-schema)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [👨‍💻 Author](#-author)

## 🚀 Features

- 🔐 **User Authentication** - Secure signup/login with JWT tokens
- ➕ **Add Todos** - Create new tasks with title and description
- ✏️ **Edit Todos** - Modify existing todos inline
- ✅ **Toggle Status** - Mark todos as complete/incomplete
- ❌ **Delete Todos** - Remove unwanted todos
- 🎨 **Modern UI** - Clean interface built with Tailwind CSS
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal speed

## 🛠️ Tech Stack

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling for faster development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Axios** - Promise-based HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast and minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling
- **JWT** - JSON Web Tokens for secure authentication
- **bcrypt** - Password hashing for security

## 📂 Project Structure

```
todo/
│── backend/              # Express + MongoDB API
│   ├── src/
│   │   ├── routes/       # API route handlers
│   │   │   ├── auth.js   # Authentication routes
│   │   │   └── todos.js  # Todo CRUD routes
│   │   ├── models/       # MongoDB schemas
│   │   │   ├── User.js   # User model
│   │   │   └── Todo.js   # Todo model
│   │   ├── controllers/  # Business logic
│   │   │   ├── authController.js
│   │   │   └── todoController.js
│   │   └── middleware/   # Custom middleware
│   │       └── auth.js   # JWT verification
│   ├── config/
│   │   └── database.js   # MongoDB connection
│   └── server.js         # Express server setup
│
│── frontend/             # React + Tailwind app
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   │   ├── TodoItem.jsx
│   │   │   ├── TodoList.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/        # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── utils/        # Utility functions
│   │   │   └── api.js    # Axios configuration
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Application entry point
│   ├── public/
│   ├── index.html
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-16.0+-339933?style=flat-square&logo=node.js&logoColor=white) **Node.js** (version 16.0 or higher)
- ![npm](https://img.shields.io/badge/npm-8.0+-CB3837?style=flat-square&logo=npm&logoColor=white) **npm** or **yarn** package manager
- ![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=flat-square&logo=mongodb&logoColor=white) **MongoDB** (local installation or MongoDB Atlas)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) **Git** for version control

## ⚡ Installation & Setup

### 1. 📥 Clone the repository
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 2. 🔧 Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### 3. 🎨 Frontend Setup
Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 4. 🌐 Open your browser
Navigate to `http://localhost:5173` to view the application.

## 🔧 Available Scripts

### Backend Scripts
```bash
npm start          # Start server in production mode
npm run dev        # Start server in development mode with nodemon
npm test           # Run backend tests
npm run lint       # Run ESLint for code quality
```

### Frontend Scripts
```bash
npm run dev        # Start Vite development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint for code quality
```

## 📖 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/auth/register` | Register new user | `{ name, email, password }` |
| `POST` | `/api/auth/login` | Login user | `{ email, password }` |

### 📝 Todos
| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/api/todos` | Get all user todos | - |
| `POST` | `/api/todos` | Create new todo | `{ title, description }` |
| `PUT` | `/api/todos/:id` | Update todo | `{ title, description, completed }` |
| `DELETE` | `/api/todos/:id` | Delete todo | - |
| `PATCH` | `/api/todos/:id/toggle` | Toggle completion | - |

## 📱 Usage

1. **🔑 Sign Up** - Create a new account with name, email, and password
2. **🔓 Login** - Sign in with your credentials
3. **➕ Add Todos** - Click "Add Todo" to create new tasks
4. **✏️ Edit Todos** - Click on any todo to edit it inline
5. **✅ Mark Complete** - Use checkbox to toggle completion status
6. **❌ Delete Todos** - Click delete button to remove todos
7. **🚪 Logout** - Use logout button to end your session safely

## 🔒 Authentication

This application implements JWT-based authentication with the following security features:

- 🔐 **Password Hashing** - Uses bcrypt for secure password storage
- 🎫 **JWT Tokens** - Stateless authentication with JSON Web Tokens
- 🛡️ **Protected Routes** - Middleware protection for authenticated endpoints
- 💾 **Token Storage** - Secure token storage in localStorage
- ⏰ **Token Expiration** - Automatic token refresh and logout

## 🗃️ Database Schema

### 👤 User Model
```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### 📋 Todo Model
```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## 🚀 Deployment

### 🔙 Backend Deployment
1. **Environment Variables** - Configure on your hosting platform
2. **Database Connection** - Set up MongoDB Atlas for production
3. **Platform Options** - Deploy to Heroku, Railway, Render, or Vercel

### 🎨 Frontend Deployment
1. **Build Project** - Run `npm run build` to create production build
2. **Deploy Build** - Upload `dist` folder to Netlify, Vercel, or GitHub Pages
3. **Environment Config** - Update API base URL for production

## 🤝 Contributing

Contributions make the open source community amazing! Any contributions are **greatly appreciated**.

1. 🍴 Fork the Project
2. 🌿 Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the Branch (`git push origin feature/AmazingFeature`)
5. 🔄 Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

<div align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" alt="Made with Love" />
</div>

**Your Name**
- 🐙 GitHub: https://github.com/ProximaD
- 💼 LinkedIn: linkedin.com/in/sandra-lavenda-7a2228174
- 📧 Email: sandralavenda254@gmail.com

## 🙏 Acknowledgments

- ⚛️ **React Team** - For the incredible JavaScript library
- ⚡ **Vite Team** - For the lightning-fast build tool
- 🎨 **Tailwind CSS** - For the utility-first CSS framework
- 🍃 **MongoDB** - For the flexible NoSQL database
- 🔐 **JWT** - For secure authentication standards

---

<div align="center">
  <h3>⭐ If you found this project helpful, please give it a star! ⭐</h3>
  <img src="https://img.shields.io/github/stars/yourusername/todo-app?style=social" alt="GitHub stars" />
</div>
