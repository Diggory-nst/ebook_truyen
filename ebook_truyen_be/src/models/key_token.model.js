'use strict'

import { Schema, model } from "mongoose"

const KeyTokenSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        trim: true,
        ref: 'User',
    },
    key_AT: {
        type: String,
        required: true,
    },
    key_RT: {
        type: String,
        required: true,
    },
    refresh_token_used: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

const keyTokenModel = model('Key', KeyTokenSchema)
export default keyTokenModel