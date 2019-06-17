import ProductService from './productService'

const getProductById = async (req, res, next) => {
    const { id } = req.params
    try {
        res.json(await ProductService.getProductById(id))
        next()
    } catch (error) {
        console.log(error.message)
        res.sendStatus(500) && next(error)
    }
}

const getProducts = async (req, res, next) => {
    try {
        res.json(await ProductService.getProducts())
        next()
    } catch (error) {
        console.log(error.message)
        res.sendStatus(500) && next(error)
    }
}

const addProduct = async (req, res, next) => {
    try {
        const name = req.body.name
        const description = req.body.description
        const price = req.body.price

        res.json(await ProductService.addProduct(name, description, price))

    } catch (error) {
        console.log(error.message)
        res.sendStatus(500) && next(error)
    }
}

export default {
    getProductById,
    getProducts,
    addProduct
}