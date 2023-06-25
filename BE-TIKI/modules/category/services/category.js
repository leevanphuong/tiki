import Category from "../model/category.js"
const getAllCategoryService=async()=>{
    const categoryService=await Category.find()
    return categoryService
}
export default getAllCategoryService