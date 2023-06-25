import express from 'express'
import productController from '../modules/product/controller/index.js'
const router = express.Router()
router.get("/product", productController.getAllproducts)
export default router 