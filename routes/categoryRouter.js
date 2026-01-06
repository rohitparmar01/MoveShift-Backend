import express from 'express'

//to link Controller
import * as categoryController from '../controller/categoryController.js';


const router = express.Router();


router.post("/save",categoryController.save);

router.get("/fetch",categoryController.fetch);

export default router;