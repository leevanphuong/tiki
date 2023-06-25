import express from 'express'
import productController from '../modules/product/controller/index.js'
const router = express.Router()
router.get("/", productController.getAllproducts)
router.get("/addProduct", productController.addProduct)
export default router 