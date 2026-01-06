//database connection file : mongodb + express
//for connection 'mongoose' client is used

import mongoose from 'mongoose';
const url="mongodb+srv://rohitparmar0215_db_user:R41tIU7VqaCqeTkW@cluster0.vholmjq.mongodb.net/moveShift";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");