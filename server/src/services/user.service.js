import db from '../db';

const getUserById = async (id) => {
    try {
        return await db.getUserById(id)
    } catch (error) {
        throw new Error(error.message)
    }
}

const getUsers = async () => {
    try {
        return await db.getUsers()
    } catch (error) {
        console.log(error)
    }
}

const addUser = async (name, email) => {
    try {
        await db.addUser(name, email)
    } catch (error) {
        console.log(error)
    }
}

export default {
    getUserById,
    getUsers,
    addUser
}