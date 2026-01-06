
import express from 'express'
import * as ConsignmentController from '../controller/ConsignmentController.js'

const ConsignmentRouter=express.Router();

ConsignmentRouter.post("/save",ConsignmentController.save);
ConsignmentRouter.get("/fetch",ConsignmentController.fetch);
ConsignmentRouter.delete("/delete",ConsignmentController.deleteOrder);
ConsignmentRouter.patch("/update",ConsignmentController.update);
export default ConsignmentRouter;