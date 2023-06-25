import catchAsync from "../../../../utils/catchAsync.js";
import status from "http-status"
import { addProduct } from "../../service/product.js";

const addProducts=catchAsync(async(req,res)=>{

    if(!req.body.categoryId){
    return res.status(status.NOT_FOUND).json("đang thiếu danh mục")
    }
    const product=await addProduct(req)
    return res.status(status.OK).json(product)
})
export default addProducts