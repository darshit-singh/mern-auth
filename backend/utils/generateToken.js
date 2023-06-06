import jwt from 'jsonwebtoken';

//need the userId to validate the token
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', //when this token expires
  });

  //now, to save this token in a cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict', //prevents CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  //with secure, site has to be https
};

export default generateToken;
