'use strict'

import CustomError from "../core/error.response.js"
import ebookModel from "../models/ebook.model.js"
import { reasonPhrases } from "../const/httpStatusCode.js"
import { getShortInfoV2, getShortInfo } from "../utils/get_short_info.js"
import slugify from "../utils/slugify.js"


class AdminService {

    static home = async (name) => {

        const all_ebook = await ebookModel.find({}).sort({ createdAt: -1 }).exec()

        return {
            name_user: name,
            ebook: getShortInfoV2({ fields: ['_id', 'name', 'author', 'status', 'chap_number'], object: all_ebook })
        }
    }

    static newEbook = async ({ name, author, status, chap_number }, file) => {

        const ebook_exists = await ebookModel.exists({ name })

        if (ebook_exists) throw new CustomError(reasonPhrases.ALREADY_EXIST, 'Ebook Đã Tồn Tại')

        const new_ebook = await ebookModel.create({ name, slug: slugify(name), author, status, chap_number, image: file.filename })

        if (!new_ebook) throw new CustomError(reasonPhrases.CREATE_FAILED, 'Tạo Ebook Thất Bại')

        return {
            ebook: getShortInfo({ fields: ['_id', 'name', 'author', 'status', 'chap_number'], object: new_ebook })
        }
    }

    static deleteEbook = async (ebook_id) => {
        await ebookModel.findByIdAndRemove(ebook_id)
    }

    static editEbook = async (ebook_id, { name, author, status, chap_number }) => {
        const update = { name, author, status, chap_number }

        const options = { upsert: true, new: true }

        const ebook = await ebookModel.findByIdAndUpdate(ebook_id, update, options).lean()

        return {
            ebook: getShortInfo({ fields: ['_id', 'name', 'author', 'status', 'chap_number'], object: ebook })
        }
    }
}

export default AdminService