import mongoose from "mongoose";
const { Schema } = mongoose;

export const todoSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    // date: { type: Date, default: Date.now },
    checked: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
  },
);
