import UserQueries from './userQueries';

const getUserById = async (id) => {
    return await UserQueries.getUserById(id)
}

const getUsers = async () => {
    return await UserQueries.getUsers()
}

const addUser = async (name, email) => {
    await UserQueries.addUser(name, email)
}

export default {
    getUserById,
    getUsers,
    addUser
}