import express from "express"
import categoryController from "../modules/category/controllers/index.js"
const router=express.Router()
router.get("/",categoryController.getAllCategoryAPI)
export default router