import catchAsync from "../../../../utils/catchAsync.js";
import { getOneProduct } from "../../service/product.js";
import status from 'http-status'
const getOneProducts = catchAsync(async(req,res)=>{
    const products = await getOneProduct(req)
    return res.status(status.CREATED).json(products)
})
export default getOneProducts