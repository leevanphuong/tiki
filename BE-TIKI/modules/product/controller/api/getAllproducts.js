import catchAsync from '../../../../utils/catchAsync.js'
import { getAllproduct } from '../../service/product.js'
import status from "http-status"
const getAllproducts=catchAsync(async(req,res)=>{
    const product= await getAllproduct()
    return res.status(status.OK).json(product)
})
export default getAllproducts

