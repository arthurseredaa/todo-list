import mongoose from "mongoose";
import { DB } from "../dev/config";

export const dbConnect = async() => {
  try {
    const db = await  mongoose
    .connect(DB.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(">>Successful connected to mongodb");
  } catch(e) {
    console.log("!!Mongoose connection error, ", e);
  }
}
