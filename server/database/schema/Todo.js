import mongoose from "mongoose";
// import { User } from "../models/User";
const { Schema } = mongoose;

export const todoSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    checked: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    // user: {type: Schema.Types.ObjectId, ref: User},
  },
);
