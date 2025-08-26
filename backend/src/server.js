//Import required modules
const express = require('express');
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

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
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