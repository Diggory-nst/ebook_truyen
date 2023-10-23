'use strict'

import EbookService from "../services/ebook.service.js"
import SuccessResponse from "../core/success.response.js"

class EbookController {

    static home = async (req, res, next) => {
        new SuccessResponse({
            message: 'Home',
            statusCode: 200,
            metadata: await EbookService.home(req.query.orderby)
        }).send(res)
    }

    static search = async (req, res, next) => {
        new SuccessResponse({
            message: 'Search success',
            statusCode: 200,
            metadata: await EbookService.search(req.body)
        }).send(res)
    }

    static detailEbook = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get detail ebook successful',
            statusCode: 200,
            metadata: await EbookService.detailEbook(req.params.slug)
        }).send(res)
    }
}

export default EbookController