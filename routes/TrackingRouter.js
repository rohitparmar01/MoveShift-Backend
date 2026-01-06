import express from 'express';

//to link controller
import * as TrackingController from '../controller/TrackingController.js';
const router = express.Router();

router.post("/save",TrackingController.save);
router.get("/fetch",TrackingController.fetch);
router.patch("/update",TrackingController.update);


export default router;