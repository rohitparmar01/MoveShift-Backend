import express from 'express'
import * as PaymentdoneController from '../controller/PaymentdoneController.js'

const Paymentrouter=express.Router();

Paymentrouter.post("/save",PaymentdoneController.save)
Paymentrouter.get("/fetch",PaymentdoneController.fetch)
export default Paymentrouter;