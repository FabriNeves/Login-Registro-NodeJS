import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

export default User;
// exporta User como um esquema de mongoDB

