import catchAsync from "../../../../utils/catchAsync";
import { addProduct } from "../../service/product";
import status from "http-status"
const addProducts = catchAsync(async(req, res)=>{
    const product = await addProduct()
    return res.status(status.OK).json(product)
})
export default addProducts