import express from 'express'
import UserRoutes from './userRouter'
import ProductRoutes from './productRouter'

const router = express.Router()

router.use('/users', UserRoutes.router)
router.use('/products', ProductRoutes.router)

export default {
    router
}