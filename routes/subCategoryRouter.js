import express from 'express';

//to link controller
import * as subcategoryController from '../controller/subCategoryController.js';

const router = express.Router();

router.post("/save",subcategoryController.save);
router.get("/fetch",subcategoryController.fetch);

export default router;