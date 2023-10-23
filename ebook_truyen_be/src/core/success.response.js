'use strict'

class SuccessResponse {
    constructor({ message, statusCode, reasonStatus = 'Success', metadata = {} }) {
        this.message = !message ? reasonStatus : message
        this.status = statusCode
        this.metadata = metadata
    }

    send(res, headers = {}) {
        return res.status(this.status).json(this)
    }
}

export default SuccessResponse