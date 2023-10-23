'use strict'

import { reasonPhrases } from "../const/httpStatusCode.js"
import asyncHandler from "../core/asyncHandler.js"
import CustomError from "../core/error.response.js"
import userModel from '../models/user.model.js'

const checkAdmin = asyncHandler(async (req, res, next) => {

    const { user_id } = req.user
    const user = await userModel.findById(user_id)
    if (!user) throw new CustomError(reasonPhrases.NOT_FOUND, 'Not found user')
    if (user.roles !== 'admin') throw new CustomError(reasonPhrases.FORBIDDEN, 'Not Have Access')

    return next()
})

export default checkAdmin