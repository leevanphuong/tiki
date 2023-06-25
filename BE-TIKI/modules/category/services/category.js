import Category from "../model/category.js"
export const getAllCategoryService=async()=>{
    const categoryService=await Category.find()
    return categoryService
}
export const addCategoryService=async(req,res)=>{
    const categoryService=await Category.create(req.body)
    return categoryService
}
export const deleteCategoryService=async(req,res)=>{
    const categoryService=await Category.findByIdAndDelete(req.params.id)
    return categoryService
}