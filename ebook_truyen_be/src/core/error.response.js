'use strict'

// import { statusCode } from "../const/httpStatusCode.js"

const statusCode = {
    FORBIDDEN: 403,
    CONFLICT: 409,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    BAD_REQUEST: 400
}

class ErrorResponse extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}

class CustomError extends ErrorResponse {
    constructor(typeError, message) {
        super(message)
        this.typeError = typeError
        this.status = statusCode[typeError]
    }
}

export default CustomError