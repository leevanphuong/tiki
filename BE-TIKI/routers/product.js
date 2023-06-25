import express from 'express'
import productController from '../modules/product/controller/index.js'
import upload from "../config/configMulter.js"
const router = express.Router()
router.get("/", productController.getAllproducts)
router.get("/:id", productController.getOneproducts)
router.use(upload.array('file',5))
router.delete("/:id", productController.deleteProduct)
router.post("/add", productController.addProducts)

export default router 