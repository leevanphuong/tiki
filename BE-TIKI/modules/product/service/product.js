import product from "../model/product.js"

export const getAllproduct= async()=>{
    const products= await product.find()
    return products
}