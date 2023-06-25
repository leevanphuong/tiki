import getAllproducts from "./api/getAllproducts.js"
import deleteProduct from './api/removeProduct.js';
import addProducts from "./api/addProduct.js";
import getOneproducts from "./api/getOneproduct.js";
const productController={
    getAllproducts,
    deleteProduct, 
    addProducts,
    getOneproducts
}
export default productController