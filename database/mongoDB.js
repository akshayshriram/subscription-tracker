import mongoose from "mongoose";

import { MONGO_DB_URI, NODE_ENV } from "../config/env.js";

if (!MONGO_DB_URI) {
  throw new Error("Please define the MONGO_DB_URI");
}

const connectToDatabse = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);

    console.log(`Connected to Databse ${NODE_ENV} environment`);
  } catch (error) {
    console.error("Error connecting to databse", error);

    process.exit(1);
  }
};

export default connectToDatabse;
