import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb ${conn.connection.host}`.bgGreen)
    }
    catch(error){
        console.log(`error in connecting mongodb and the error is ${error}`)
    }
}

export default connectDB