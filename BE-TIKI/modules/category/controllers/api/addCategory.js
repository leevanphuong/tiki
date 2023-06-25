import { addCategoryService } from "../../services/category.js"
import status from "http-status"
import upload from "../../../../config/configMulter.js"
import catchAsync from "../../../../utils/catchAsync.js"
const addCategoryAPI = catchAsync(async (req, res) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(status.BAD_REQUEST).json(err)
        }
        const categoryAPI = await addCategoryService(req)
        return res.status(status.OK).json(
            categoryAPI
        )
    })

})
export default addCategoryAPI
