import express from 'express';
import UserController from '../controllers/user.controller'

const router = express.Router();

router.route('/users/:id')
    .get(UserController.getUserById)

router.route('/users')
    .get(UserController.getUsers)
    .post(UserController.addUser)

module.exports = router

export default {
    router
}