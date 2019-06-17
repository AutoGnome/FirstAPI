import express from 'express';
import UserHandler from '../Users/userHandler'

const router = express.Router();

router.route('/:id')
    .get(UserHandler.getUserById)

router.route('/')
    .get(UserHandler.getUsers)
    .post(UserHandler.addUser)


export default {
    router
}