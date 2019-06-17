import express from 'express';
import ProductHandler from '../Products/productHandler'

const router = express.Router();

router.route('/:id')
    .get(ProductHandler.getProductById)

router.route('/')
    .get(ProductHandler.getProducts)
    .post(ProductHandler.addProduct)


export default {
    router
}