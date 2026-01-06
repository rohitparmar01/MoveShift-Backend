import express from 'express';

//to link controller
import * as UserController from '../controller/userController.js';

const router = express.Router();

router.post("/save",UserController.save);
router.post("/login",UserController.login);
router.get("/fetch",UserController.fetch);
router.patch("/update",UserController.update);
router.delete('/delete',UserController.deleteUser)

export default router;