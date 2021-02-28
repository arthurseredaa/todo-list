import mongoose from "mongoose";
import { DB } from "../dev/config";

export const db = mongoose.connect(DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(">>Connected to database!"))
