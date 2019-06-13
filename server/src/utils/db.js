import '../config/env'
import connection from '../config/connection'

var functionToCall = process.argv[2];

var myFunctions = {
    createTable: createTable
};

// Functions
async function createTable() {
    try {
        await connection.schema.createTable('users', (table) => {
            table.increments('id')
            table.string('name')
            table.string('email')
        })
    } catch (error) {
        console.log(error)
    }

    connection.destroy();
};



myFunctions[functionToCall]();