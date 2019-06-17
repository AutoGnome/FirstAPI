import '../config/env'
import connection from '../config/connection'

const getUsers = async () => {
    return await connection('users')
        .select('*')    
}

const getUserById = async (id) => {
    return await connection('users')
        .where({id: id})
}

const addUser = async (name, email) => {
    return await connection('users')
    .insert({
        name: name,
        email: email
    })
}

export default {
    getUsers,
    getUserById,
    addUser
}