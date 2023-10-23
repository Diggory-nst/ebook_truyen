'use strict'

import { Schema, model } from "mongoose"

const ebookSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        maxLength: 150,
        unique: true
    },
    slug: {
        type: String,
        unique: true
    },
    author: {
        type: String,
        require: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['Đang Ra', 'Hoàn Thành'],
        default: 'Hoàn Thành'
    },
    chap_number: {
        type: String,
        require: true,
    },
    image: {
        type: String
    }
}, {
    timestamps: true
})

const ebookModel = model('Ebook', ebookSchema)

export default ebookModel