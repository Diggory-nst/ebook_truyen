'use strict'

import { Types } from "mongoose"
import { reasonPhrases } from "../const/httpStatusCode.js"
import asyncHandler from "../core/asyncHandler.js"
import CustomError from "../core/error.response.js"
import keyTokenModel from "../models/key_token.model.js"
import verifyJWT from "../utils/verify_jwt.js"
import createToken from "../utils/create_token.js"

const HEADER = {
    CLIENT_ID: 'x-client-id',
    AUTHORIZATION: 'authorization',
    REFRESHTOKEN: 'x-rtoken-id'
}

const authentication = asyncHandler(async (req, res, next) => {

    const user_id = req.headers[HEADER.CLIENT_ID]
    if (!user_id) throw new CustomError(reasonPhrases.UNAUTHORIZED, 'Invalid request')

    const key = await keyTokenModel.findOne({ user: new Types.ObjectId(user_id) }).exec()
    if (!key) throw new CustomError(reasonPhrases.NOT_FOUND, 'Not found key')

    const access_token = req.headers[HEADER.AUTHORIZATION]
    const refresh_token = req.headers[HEADER.REFRESHTOKEN]
    if (!access_token) throw new CustomError(reasonPhrases.UNAUTHORIZED, 'Invalid request')
    if (!refresh_token) throw new CustomError(reasonPhrases.UNAUTHORIZED, 'Invalid request')

    let decode_user

    try {
        decode_user = verifyJWT(access_token, key.key_AT)
        if (user_id !== decode_user.user_id) throw new CustomError(reasonPhrases.UNAUTHORIZED, 'Invalid request')
    } catch (error) {
        if (error.name == 'TokenExpiredError') {
            decode_user = verifyJWT(refresh_token, key.key_RT)
            if (user_id !== decode_user.user_id) throw new CustomError(reasonPhrases.UNAUTHORIZED, 'Invalid request')
            const tokens = await createToken({ user_id, name: decode_user.name, email: decode_user.email })

            const instance_key = await keyTokenModel.findOne({ user: new Types.ObjectId(user_id) })
            await instance_key.updateOne({ refresh_token_used: refresh_token })

            req.tokens = tokens
        } else {
            if (key.refresh_token_used.includes(refresh_token)) {
                await key.deleteOne({ user: user_id })
                throw new CustomError(reasonPhrases.TOKEN_ERROR, 'Something wrong happend. Please relogin!')
            }

            throw new CustomError(reasonPhrases.TOKEN_ERROR, 'Token Incorrect')
        }
    }

    req.key = key
    req.user = decode_user

    return next()
})

export default authentication