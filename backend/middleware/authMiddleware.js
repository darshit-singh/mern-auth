//we'll need to check the cookie if it is valid. We'll need to parse it for that. Parsed in server.js

//we need to get the payload(user id) from the token

import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//for protecting routes. You'll be able to access the routes only when logged in
//next is always needed in middlewares
const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt; //jwt is the cookie name

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //setting user on the request object since it will be accessible from any route.
      req.user = await User.findById(decoded.userId).select('-password'); //so password isn't returned in req object

      //it is in decoded.userId because when we generated the token we passed in the userId in the sign method

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, invalid token');
    }
  } else {
    res.status(401);

    throw new Error('Not authorized, no token');
  }
});

export { protect };
