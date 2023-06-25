import getAllproducts from "./api/getAllproducts.js"
import deleteProduct from './api/removeProduct.js';
import addProducts from "./api/addProduct.js";

const productController={
    getAllproducts,
    deleteProduct, 
    addProducts
}
export default productController