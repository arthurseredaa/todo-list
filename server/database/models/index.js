import mongoose from "mongoose";
import { todoSchema } from "../schema's/Todo";

export const Todo = mongoose.model("Todo", todoSchema);
