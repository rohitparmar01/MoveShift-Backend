import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from "express-fileupload";


const app = express();   

//to link routers
import UserRouter from './routes/userRouter.js';
import CategoryRouter from './routes/categoryRouter.js'
import SubCategoryRouter from './routes/subCategoryRouter.js';
import aiChatRoute from './routes/aiChat.js';
import ConsignmentRouter from './routes/ConsignmentRouter.js';

//to link controller
import Gateway from './controller/paymentController.js';
import PaymentdoneRouter from './routes/PaymentRouter.js';
import TrackingRouter from './routes/TrackingRouter.js';

import dotenv from "dotenv";
dotenv.config();




app.use(cors())

let isConnected=false;

async function connectToMongoDB(){
    try{{
        await import('./models/connection.js');
        isConnected=true;
        console.log("MongoDB connection established.");
    }
    }catch(error){
        console.error("Error connecting to MongoDB:", error);
    }
}

app.use(async (req,res,next)=>{
    if(!isConnected){
        await connectToMongoDB();
    }
    next();
});

// ✅ FILE UPLOAD MIDDLEWARE
app.use(fileUpload());

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//config to load routers
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/subcategory",SubCategoryRouter);
app.use("/api/ai", aiChatRoute);

app.use("/consignment",ConsignmentRouter);
app.use("/tracking",TrackingRouter);

//method to load Gateway
app.post("/payment",Gateway)
app.use("/paymentdone",PaymentdoneRouter);



// app.listen(3001);
// console.log("server invoked at link http://localhost:3001");

module.exports=app;