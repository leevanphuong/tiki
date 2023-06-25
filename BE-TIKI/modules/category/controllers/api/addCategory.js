import { addCategoryService } from "../../services/category.js"
import status from "http-status"
import catchAsync from "../../../../utils/catchAsync.js"
const addCategoryAPI=catchAsync(async(req,res)=>{
    const categoryAPI=await addCategoryService(req)
    return res.status(status.OK).json(
        categoryAPI
    )
})
export default addCategoryAPI
