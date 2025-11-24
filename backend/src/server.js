//Import required modules
const express = require('express');
const router = express.Router();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

//Load environment variables from .env file
dotenv.config();

//Initialize Express app
const app = express();

app.use(cors({ 
    origin: [
        "https://todo-mu-three-23.vercel.app", //Live frontend URL
        "http://localhost:5173"], //Local frontend URL
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"] 
    }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ status: 'ok'}));

//API routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/tasks', require('./routes/task.routes'));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

//Connect to MongoDB then start server
connectDB(process.env.MONGO_URI) 
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((err) => {
    console.error('Mongo error', err);
    process.exit(1);
});