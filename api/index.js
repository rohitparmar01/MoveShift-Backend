import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import app from "./api/index.js";

import UserRouter from "./routes/userRouter.js";
import CategoryRouter from "./routes/categoryRouter.js";
import SubCategoryRouter from "./routes/subCategoryRouter.js";
import aiChatRoute from "./routes/aiChat.js";
import ConsignmentRouter from "./routes/ConsignmentRouter.js";
import TrackingRouter from "./routes/TrackingRouter.js";
import PaymentdoneRouter from "./routes/PaymentRouter.js";
import Gateway from "./controller/paymentController.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.use("/subcategory", SubCategoryRouter);
app.use("/api/ai", aiChatRoute);
app.use("/consignment", ConsignmentRouter);
app.use("/tracking", TrackingRouter);

app.post("/payment", Gateway);
app.use("/paymentdone", PaymentdoneRouter);

export default app;   // ✅ IMPORTANT
