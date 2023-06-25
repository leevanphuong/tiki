import product from "../model/product.js"

export const getAllproduct = async () => {
    const products = await product.find()
    return products
}

export const removeProduct = async (req, res) => {
    const deleteProduct = await product.findByIdAndDelete(req.params.id)
    return deleteProduct
}
export const getOneProduct = async(req)=>{
    const productId=req.params.productId
    const getOnes = await product.findById(productId)
    return getOnes
}