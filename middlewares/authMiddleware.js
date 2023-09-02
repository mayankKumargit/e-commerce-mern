import JWT from 'jsonwebtoken'
import userModels from '../models/userModels.js'

// protected route (token base)
export const requireSignIn=async(request,response,next)=>{
    try{
        const decode=JWT.verify(request.headers.authorization,process.env.JWT_SECRET)
        request.user=decode
        next()
    }
    catch(error){
        console.log(error)
    }
}

// admin access

export const isAdmin=async(request,response,next)=>{
    try{
        const user=await userModels.findById(request.user._id)
        if(user.role!==1){
            return response.status(401).send({
                success:false,
                message:"unauthorized access"
            })
        }
        else    
            next()
    }
    catch(error){
        console.log(error)
        response.status(400).send({
            success:false,
            error,
            message:"error in admin"
        })
    }
}