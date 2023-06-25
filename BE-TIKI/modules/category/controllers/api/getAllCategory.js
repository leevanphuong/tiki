import getAllCategoryService from "../../services/category.js"
import status from "http-status"
import catchAsync from "../../../../utils/catchAsync.js"
const getAllCategoryAPI=catchAsync(async(req,res)=>{
    const categoryAPI=await getAllCategoryService()
    return res.status(status.OK).json(
        categoryAPI
    )
})
export default getAllCategoryAPI