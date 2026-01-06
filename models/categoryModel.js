import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
    _id: Number,
    catnm: {
        type: String,
        required: [true, "Name is required"],
        lowercase: true,
        unique: true,
        trim: true
    },
    caticonnm: {
        type: String,
        required: [true, "caticon is required"],
        trim: true
    }
})

const CategorySchemaModel = mongoose.model('category_collection',CategorySchema)

export default CategorySchemaModel;