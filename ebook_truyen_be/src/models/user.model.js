'use strict'

import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        maxLength: 150,
        unique: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    roles: {
        type: String,
        enum: ['admin', 'user'],
        default: 'admin'
    }
}, {
    timestamps: true
})

const userModel = model('User', userSchema)

export default userModel