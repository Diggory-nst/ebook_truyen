'use strict'

import UserService from "../services/user.service.js"
import SuccessResponse from '../core/success.response.js'

class UserController {
    static signUp = async (req, res, next) => {
        new SuccessResponse({
            message: 'Account Registered',
            statusCode: 201,
            metadata: await UserService.signUp(req.body, req.get('host'))
        }).send(res)
    }

    static activate = async (req, res, next) => {
        new SuccessResponse({
            message: 'Account activated',
            statusCode: 200,
            metadata: await UserService.activate(req.params.username_encode)
        }).send(res)
    }

    static logIn = async (req, res, next) => {
        new SuccessResponse({
            message: 'Logged in successfully',
            statusCode: 200,
            metadata: await UserService.logIn(req.body)
        }).send(res)
    }

    static logOut = async (req, res, next) => {
        new SuccessResponse({
            message: 'Sign out successfully',
            statusCode: 200,
            metadata: await UserService.logOut(req.key)
        }).send(res)
    }

    static forgotPassword = async (req, res, next) => {
        new SuccessResponse({
            message: 'Forgot password',
            statusCode: 200,
            metadata: await UserService.forgotPassword(req.body, req.get('host'))
        }).send(res)
    }

    static resetPassword = async (req, res, next) => {
        new SuccessResponse({
            message: 'Reset password succesfully',
            statusCode: 200,
            metadata: await UserService.resetPassword(req.params.username_encode, req.body)
        }).send(res)
    }
}

export default UserController