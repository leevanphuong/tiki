import porductRouter from "./product.js"
import express from "express"
const router = express.Router()
const defaultRouter = [
    {path:'/product',route: porductRouter }
]
defaultRouter.forEach((route)=>{
    router.use(route.path, route.route)
})
export default defaultRouter