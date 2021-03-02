import mongoose from "mongoose";
import { DB } from "../dev/config";

export const db = mongoose
  .connect(DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
