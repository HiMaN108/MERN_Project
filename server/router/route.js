import { Router } from "express";

const router = Router();

//import all controllers

import * as controller from '../controllers/appController.js'


//  POST METHODs/
router.route('/register').post(controller.register);  //register user
router.route('/registerMail').post();         //send the mail
router.route('/autenticate').post((req,res) => res.end());       // autheicate the user
router.route('/login').post(controller.verifyUser,controller.login);          // login the user


// GET methods
router.route('/user/:username').get(controller.getUser) // user eith username
router.route('/generateOTP').get(controller.generateOTP)    // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP)     // verify generate OTP
router.route('/createResetSession').get(controller.createResetSession)     // reset all the variables

//PUT methods

router.route('/updateuser').put(controller.updateUser);  // is use to update the userprofile
router.route('/resetPassword').put(controller.resetPassword);  //use to reset password

export default router;
