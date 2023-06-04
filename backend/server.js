import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

//middleware for reading request data
app.use(express.json()); //allows us to parse raw JSON
app.use(express.urlencoded({ extended: true })); //allows us to send form data

//middleware for routing
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is Ready!');
});

//middleware for custom errors
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

//The endpoints that we want to create.
//- **POST /api/users** - Register a user
//- **POST /api/users/auth** - Authenticate a user and get token
//- **POST /api/users/logout** - Logout user and clear cookie
//- **GET /api/users/profile** - Get user profile
//- **PUT /api/users/profile** - Update profile
