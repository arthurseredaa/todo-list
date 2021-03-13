import mongoose from "mongoose";
const { Schema } = mongoose;

export const userSchema = new Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
});
