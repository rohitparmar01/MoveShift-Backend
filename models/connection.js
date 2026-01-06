//database connection file : mongodb + express
//for connection 'mongoose' client is used

import mongoose from 'mongoose';
const url=process.env.MONGODB_URI;
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");