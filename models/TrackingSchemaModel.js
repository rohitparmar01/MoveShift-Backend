import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const TrackingSchema = mongoose.Schema({
  orderId: Number,

  info: String,
  description: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  }

});

// Apply the uniqueValidator plugin to UserSchema.
//CategorySchema.plugin(uniqueValidator);

// compile schema to model
const TrackingSchemaModel = mongoose.model('tracking_collection',TrackingSchema);

export default TrackingSchemaModel;