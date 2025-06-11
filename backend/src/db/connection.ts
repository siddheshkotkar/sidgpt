import {connect, disconnect} from 'mongoose'
async function connectToDatabase()
{   
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
        throw new Error("not able to connect to db")
    }
}
async function disconnectFromDatabase()
{
    try {
        await disconnect();
    } catch (error) {
        console.log(error)
        throw new Error("not able to disconnect")
    }
}

export {connectToDatabase, disconnectFromDatabase}