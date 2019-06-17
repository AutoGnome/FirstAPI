import UserService from './userService'

const getUserById = async (req, res, next) => {
    const { id } = req.params
    try {
        res.json(await UserService.getUserById(id))
        next()
    } catch (error) {
        console.log(error.message)
        res.sendStatus(500) && next(error)
    }
}

const getUsers = async (req, res, next) => {
    try {
        res.json(await UserService.getUsers())
        next()
    } catch (error) {
        console.log(error.message)
        res.sendStatus(500) && next(error)
    }
}

const addUser = async (req, res, next) => {
    try {
        const name = req.body.name
        const email = req.body.email

        res.json(await UserService.addUser(name, email))

    } catch (error) {
        console.log(error.message)
        res.sendStatus(500) && next(error)
    }
}

export default {
    getUserById,
    getUsers,
    addUser
}