'use strict'

import express from "express"
import routerUser from "./user.router.js"
import routerAdmin from "./admin.router.js"
import asyncHandler from "../core/asyncHandler.js"
import EbookController from "../controllers/ebook.controller.js"
import routerEbook from "./ebook.router.js"
import cors from 'cors'

const router = express.Router()

router.use(cors())

router.use('/user', routerUser)
router.use('/admin', routerAdmin)
router.use('/ebook', routerEbook)

router.get('/', asyncHandler(EbookController.home))


export default router