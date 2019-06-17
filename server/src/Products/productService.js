import ProductQueries from './productQueries';

const getProductById = async (id) => {
    return await ProductQueries.getProductById(id)
}

const getProducts = async () => {
    return await ProductQueries.getProducts()
}

const addProduct = async (name, email) => {
    await ProductQueries.addProduct(name, description, price)
}

export default {
    getProductById,
    getProducts,
    addProduct
}