import catchAsync from "../../../../utils/catchAsync.js";
import { removeProduct } from "../../service/product.js";
import status from 'http-status';
const deleteProduct = catchAsync(async (req, res) => {
    const product = await removeProduct(req)
    return res.status(status.OK).json(product)
})

export default deleteProduct