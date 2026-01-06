//database connection file : mongodb + express
//for connection 'mongoose' client is used

// import mongoose from 'mongoose';
// const url=process.env.MONGODB_URI;
// mongoose.connect(url);
// console.log("Successfully connected to mongodb database...");
import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
