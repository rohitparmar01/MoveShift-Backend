
import mongoose from "mongoose";

const ConsignmentSchema=mongoose.Schema({
    _id:Number,
        email: {
    type: String,
    required: [true,"email is required"],
    lowercase:true,
    trim:true
  },
    category: {
    type: String,
    required: [true,"category is required"]
  },
  subcategory: {
    type: String,
    required: [true,"subcategory is required"],
    trim: true
  },
 pickup_location:{
    type: String,
    required: [true,"pickup_location is required"],
    trim: true
  },
   destination:{
    type: String,
    required: [true,"destination is required"],
    trim: true
  },
  descrition:{
    type: String,
    required: [true,"description is required"],
    trim: true
  },
  track: String,
  status: Number,
  info: String

})
const ConsignmentSchemaModel=mongoose.model("OrderDetails",ConsignmentSchema)
export default ConsignmentSchemaModel;