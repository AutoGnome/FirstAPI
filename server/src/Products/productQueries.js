import '../config/env'
import connection from '../config/connection'

const getProducts = async () => {
    return await connection('products')
        .select('*')    
}

const getProductById = async (id) => {
    return await connection('products')
        .where({id: id})
}

const addProduct = async (name, description, price) => {
    return await connection('products')
    .insert({
        name: name,
        description: description,
        price: price
    })
}

export default {
    getProducts,
    getProductById,
    addProduct
}