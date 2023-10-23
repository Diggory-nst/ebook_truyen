'use strict'

import express from "express"
import UserController from "../controllers/user.controller.js"
import asyncHandler from '../core/asyncHandler.js'
import authentication from "../auth/user.auth.js"

const routerUser = express.Router()

routerUser.post('/signup', asyncHandler(UserController.signUp))
routerUser.get('/activate/:username_encode', asyncHandler(UserController.activate))
routerUser.post('/login', asyncHandler(UserController.logIn))
routerUser.post('/forgot-password', asyncHandler(UserController.forgotPassword))
routerUser.post('/reset-password/:username_encode', asyncHandler(UserController.resetPassword))

routerUser.use(authentication)

routerUser.get('/logout', asyncHandler(UserController.logOut))

export default routerUser