//need to add models for our data. Models consist of a schema which (fields that data will have)

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//the password is gonna be a hashed pass ofc
//need to add a middleware here to hash to password
//this pertains to the user we're saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  //else we're creating a new user with new pass
  const salt = await bcrypt.genSalt(10);

  //hash the password
  this.password = await bcrypt.hash(this.password, salt);
}); //before we save

const User = mongoose.model('User', userSchema);
//name of the model, schema

export default User;
