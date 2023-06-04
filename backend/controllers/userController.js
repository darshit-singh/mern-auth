import asyncHandler from 'express-async-handler';

//we're gonna use async-handler because mongoose methods return a promise and we wanna use async await. We can use try catch but using async handlers will wrap around each controller function and would allow us to use custom error handler

//@desc     Auth user/set token
//route     POST /api/users/auth
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  //just to test
  // res.status(401);
  // throw new Error('something went wrong - client');

  res.status(200).json({
    message: 'Auth User',
  });
});

//@desc     Register a new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Register User',
  });
});

//@desc     Logout user
//@route    POST /api/users/logout
//@access   Public
const logoutUser = asyncHandler(async (req, res) => {
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
