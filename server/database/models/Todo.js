import mongoose from "mongoose";
import { todoSchema } from "../schema/Todo";

export const Todo = mongoose.model("Todo", todoSchema);

