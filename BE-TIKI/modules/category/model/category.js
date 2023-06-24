import mongoose from "mongoose";
const categorySchamel = mongoose.Schema({
    name: String,
    image: {
        type: String,
        default: ''
    }
})

export default mongoose.model("Category", categorySchamel)