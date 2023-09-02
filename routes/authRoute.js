import express from "express";
import {registerController,loginController,testController,forgotPasswordController, 
    updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router=express.Router()

//routing
router.post('/register',registerController)

//login post request
router.post('/login',loginController)

// forgot password post
router.post('/forgot-password',forgotPasswordController)

// test routes for middleware
router.get("/test",requireSignIn,isAdmin,testController)

// protected route auth
router.get("/user-auth",requireSignIn,(request,response)=>{
    response.status(200).send({ok:true});
})

// protected Admin route auth
router.get("/admin-auth",requireSignIn,isAdmin,(request,response)=>{
    response.status(200).send({ok:true});
})

// update profile
router.put('/profile',requireSignIn,updateProfileController)

// orders
router.get('/orders',requireSignIn,getOrdersController)

// get all orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)

// update orders
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)
export default router