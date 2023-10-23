'use strict'

import express from 'express'
import EbookController from '../controllers/ebook.controller.js'
import asyncHandler from '../core/asyncHandler.js'

const routerEbook = express.Router()

routerEbook.post('/search', asyncHandler(EbookController.search))
routerEbook.get('/:slug', asyncHandler(EbookController.detailEbook))

export default routerEbook