import productRouter from "./product.js"
import categoryRouter from "./category.js"
import express from "express"
const router = express.Router()
const defaultRouter = [
    { path: '/product', route: productRouter },
    { path: '/category', route: categoryRouter }
]
defaultRouter.forEach((route) => {
    router.use(route.path, route.route)
})
export default router
