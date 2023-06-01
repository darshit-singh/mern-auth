//we can write the logic here but it's good practice to write the logic in controller. So we've created the userController file.

//We will link the controller to this routes file
import express from 'express';
import { authUser } from '../controllers/userController.js';
//remember to add the .js extension when we are importing our OWN JS files. This is done cuz we're using type modules in package.json
//Not doing so gives us a module not found error

const router = express.Router();

//  /api/users is already connected to this file. So we don't need to specify it in the route.post below
//it is connected because of this line in server.js app.use('/api/users', userRoutes);
router.post('/auth', authUser);

export default router;
