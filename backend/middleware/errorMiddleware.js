//default error message for expressJS is an html page. But since we're creating api's we need that error to be a JSON object with the error message

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);

  res.status(404);

  next(error); //call the next piece of middlware. And we're gonna pass in that error
};

//since you added the err param, express knows this is your custom middlware.
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = err.message;

  //specific type of error in mongoose is claled CastError
  //ex. when you're trying to get a user with an ObjectId that doesn't exist
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404; //not found
    message = 'Resource not found, Cast Error from mongoose';
  }

  //stack trace only for development - shows files and line numbers, from where the error came.
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
