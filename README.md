📝 Todo Application

A simple MERN stack Todo application built with React (Vite) + Tailwind CSS on the frontend and Node.js + Express + MongoDB on the backend.
Users can sign up, log in, and manage their tasks (create, update, delete, and mark as complete).

🚀 Features

🔐 User authentication (Signup / Login / JWT-based sessions)

➕ Add new todos

✏️ Edit todos

✅ Mark todos as complete/incomplete

❌ Delete todos

🎨 Styled with Tailwind CSS for a modern UI

🛠️ Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

📂 Project Structure
todo/
│── backend/         # Express + MongoDB API
│   ├── src/
│   │   ├── routes/  # API routes
│   │   ├── models/  # MongoDB models
│   │   ├── controllers/ # Request handlers
│   │   └── middleware/  # Auth middleware
│   └── server.js
│
│── frontend/        # React + Tailwind app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── index.css
│
└── README.md

⚡ Getting Started
1️⃣ Clone the repo
git clone https://github.com/your-username/todo-app.git
cd todo-app

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install


Run frontend:

npm run dev

🌍 API Endpoints
Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	Login user & get token
GET	/api/todos	Get all todos (protected)
POST	/api/todos	Create new todo
PUT	/api/todos/:id	Update todo
DELETE	/api/todos/:id	Delete todo
📸 Screenshots

(Add screenshots of your app here – login, dashboard, todo list)

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📜 License

This project is licensed under the MIT License.
