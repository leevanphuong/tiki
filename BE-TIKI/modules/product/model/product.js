import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    quantity: Number,
    brand: String,
    images: {
        type: Array,
        default: []
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    authId: {
        type: mongoose.Types.ObjectId,
        ref: 'Auth'
    }
},
    {
        timestamps: true
    })

export default mongoose.model("Product", productSchema)