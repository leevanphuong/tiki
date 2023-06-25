import product from "../model/product.js"
export const getAllproduct = async () => {
    const products = await product.find()
    return products
}
export const removeProduct = async (req, res) => {
    const deleteProduct = await product.findByIdAndDelete(req.params.id)
    return deleteProduct
}
export const addProduct= async(req)=>{
    const fileImages=req.files
    const check=fileImages.flatMap((item)=>item.path)

    const products=await product.create({
        ...req.body,
        images:check
    })
return products
}
export const getOneproduct= async(req)=>{
    const getOne = await product.findById(req.params.id)
    return getOne
}
