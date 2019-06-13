import '../config/env'
import connection from '../config/connection'

const getUsers = async () => {
    try {
        return await connection('users')
            .select('*')
    } catch (error) {
        console.log(error)
    }
    
}

const getUserById = async (id) => {
    try {
        return await connection('users')
            .where({id: id})
    } catch (error) {
        console.log(error)
    }
}

const addUser = async (name, email) => {
    try {
        return await connection('users')
        .insert({
            name: name,
            email: email
        })
    } catch (error) {
        console.log(error)
    }
}

export default {
    getUsers,
    getUserById,
    addUser
}