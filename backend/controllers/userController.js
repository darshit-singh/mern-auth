import asyncHandler from 'express-async-handler';

//@desc     Auth user/set token
//route     POST /api/users/auth
//@access   Public

//we're gonna use async-handler because mongoose methods return a promise and we wanna use async await. We can use try catch but using async handlers will wrap around each controller function and would allow us to use custom error handler
const authUser = asyncHandler(async (req, res) => {
  //just to test
  // res.status(401);
  // throw new Error('something went wrong - client');

  res.status(200).json({
    message: 'Auth User',
  });
});

export { authUser };
