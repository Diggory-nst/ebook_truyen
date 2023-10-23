'use strict'

import crypto from 'node:crypto'
import keyTokenModel from '../models/key_token.model.js'
import { Types } from 'mongoose'
import jwt from 'jsonwebtoken'
import CustomError from '../core/error.response.js'
import { reasonPhrases } from '../const/httpStatusCode.js'

const createToken = async ({ user_id, name, email }) => {
    const key_exists = await keyTokenModel.findOne({ user: new Types.ObjectId(user_id) }).exec()

    const key_AT = crypto.randomBytes(64).toString('hex')
    const key_RT = crypto.randomBytes(64).toString('hex')

    if (key_exists) {
        await key_exists.updateOne({ key_AT, key_RT })
    } else {
        const key = await keyTokenModel.create({ user: user_id, key_AT, key_RT })
        if (!key) throw new CustomError(reasonPhrases.BAD_REQUEST, 'Create Token Error')
    }

    const access_token = jwt.sign({ user_id, name, email }, key_AT, {
        expiresIn: '30 days'
        // expiresIn: '2m'
    })

    const refresh_token = jwt.sign({ user_id, name, email }, key_RT, {
        expiresIn: '90 days'
        // expiresIn: '1 days'
    })

    return {
        access_token,
        refresh_token
    }
}

export default createToken