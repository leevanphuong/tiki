import express from 'express'
import productController from '../modules/product/controller/index.js'
const router = express.Router()
router.get("/", productController.getAllproducts)
router.delete("/:id", productController.deleteProduct)
router.get("/:productId", productController.getOneProducts)
export default router 