import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
//we're gonna use async-handler because mongoose methods return a promise and we wanna use async await. We can use try catch but using async handlers will wrap around each controller function and would allow us to use custom error handler

//@desc     Auth user/set token
//route     POST /api/users/auth
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  //just to test
  // res.status(401);
  // throw new Error('something went wrong - client');
  const { email, password } = req.body;
  //this is the plain text password which needs to match with the hashed password

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401); //unauthorized
    throw new Error('Invalid email or password');
  }
  // res.status(200).json({
  //   message: 'Auth User',
  // });
});

//@desc     Register a new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  //when new user registers we need all this information from the request body. Have added middlewares so express can access the body.
  const { name, email, password } = req.body;

  //when we get the details in the request we want to check if the user already exists.
  //all model methods return a promise.
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400); //client error
    throw new Error('User already exists'); //this will use the error handler that we created.
  }

  //create the user since it doesn't exist
  const user = await User.create({
    name,
    email,
    password, //password hashed in userModel.js
  });

  if (user) {
    generateToken(res, user._id);
    //successful, something created
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

  // res.status(200).json({
  //   message: 'Register User',
  // });
});

//@desc     Logout user
//@route    POST /api/users/logout
//@access   Public
const logoutUser = asyncHandler(async (req, res) => {
  //just destroy the cookie here
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    message: 'User logged out',
  });
});

//@desc     Get user profile
//@route    GET /api/users/profile
//@access   Private - {means, you'll need to have a valid JWT to access this}
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Get user profile',
  });
});

//@desc     Update user profile
//@route    PUT /api/users/profile
//@access   Private - {means, you'll need to have a valid JWT to access this}
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Update user profile',
  });
});

export {
  authUser,
  registerUser,
  updateUserProfile,
  getUserProfile,
  logoutUser,
};
