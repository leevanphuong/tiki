import product from "../model/product.js"

export const getAllproduct= async()=>{
    const products= await product.find()
    return products
}
export const addProduct = async(req, res) => {
    const Product = await product.create(req.body)
    return Product
}