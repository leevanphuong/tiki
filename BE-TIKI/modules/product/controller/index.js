import getAllproducts from "./api/getAllproducts.js"
import deleteProduct from './api/removeProduct.js';
import getOneProducts from "./api/getOneproduct.js";
const productController={
    getAllproducts,
    deleteProduct,
    getOneProducts
}
export default productController