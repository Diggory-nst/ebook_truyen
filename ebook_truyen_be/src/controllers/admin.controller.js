'use strict'

import AdminService from "../services/admin.service.js"
import SuccessResponse from "../core/success.response.js"

class AdminController {

    static home = async (req, res, next) => {
        new SuccessResponse({
            message: 'Home',
            statusCode: 200,
            metadata: await AdminService.home(req.user.name, req.tokens)
        }).send(res)
    }

    static newEbook = async (req, res, next) => {
        new SuccessResponse({
            message: 'Add new ebook successful',
            statusCode: 200,
            metadata: await AdminService.newEbook(req.body, req.file)
        }).send(res)
    }

    static deleteEbook = async (req, res, next) => {
        new SuccessResponse({
            message: 'Delete ebook successful',
            statusCode: 200,
            metadata: await AdminService.deleteEbook(req.params.ebook_id)
        }).send(res)
    }

    static editEbook = async (req, res, next) => {
        new SuccessResponse({
            message: 'Edit ebook successful',
            statusCode: 200,
            metadata: await AdminService.editEbook(req.params.ebook_id, req.body)
        }).send(res)
    }
}

export default AdminController