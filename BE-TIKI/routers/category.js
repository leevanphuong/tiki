import express from "express"
import categoryController from "../modules/category/controllers/index.js"
const router=express.Router()
router.get("/",categoryController.getAllCategoryAPI)
router.delete("/:id",categoryController.deleteCategoryAPI)
export default router
