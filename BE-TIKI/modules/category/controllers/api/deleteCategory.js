import { deleteCategoryService } from "../../services/category.js";
import status from "http-status"
import catchAsync from "../../../../utils/catchAsync.js";

const deleteCategoryAPI=catchAsync(async(req,res)=>{
    const categoryAPI=await deleteCategoryService(req)
    return res.status(status.OK).json(
        categoryAPI
    )
})
export default deleteCategoryAPI
