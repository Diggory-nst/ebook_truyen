'use strict'

import CustomError from "../core/error.response.js"
import ebookModel from "../models/ebook.model.js"
import { reasonPhrases } from "../const/httpStatusCode.js"
import { getShortInfo, getShortInfoV2 } from "../utils/get_short_info.js"


class EbookService {

    static home = async (query) => {

        let all_ebook

        if (query) {
            switch (query) {
                case 'hoanthanh':
                    all_ebook = await ebookModel.find({ status: 'Hoàn Thành' }).sort({ createdAt: -1 }).exec()
                    break;

                case 'dangra':
                    all_ebook = await ebookModel.find({ status: 'Đang Ra' }).sort({ createdAt: -1 }).exec()
                    break;

                case 'moinhat':
                    all_ebook = await ebookModel.find({}).sort({ createdAt: -1 }).exec()
                    break;
                default:
                    break;
            }
        } else {
            all_ebook = await ebookModel.find({}).sort({ createdAt: -1 }).exec()
        }

        return {
            ebook: getShortInfoV2({ fields: ['_id', 'name', 'slug', 'author', 'status', 'chap_number', 'image'], object: all_ebook })
        }
    }

    static search = async ({ name_ebook }) => {
        const ebooks = await ebookModel.find({ name: { $regex: name_ebook, $options: 'i' } })

        return {
            ebooks: getShortInfoV2({ fields: ['_id', 'name', 'slug'], object: ebooks })
        }
    }

    static detailEbook = async (slug) => {
        const ebook = await ebookModel.findOne({ slug }).lean()

        if (!ebook) throw new CustomError(reasonPhrases.NOT_FOUND, 'Không Tìm Thấy Ebook')

        return {
            ebook: getShortInfo({ fields: ['name', 'author', 'status', 'chap_number', 'image'], object: ebook })
        }
    }
}

export default EbookService