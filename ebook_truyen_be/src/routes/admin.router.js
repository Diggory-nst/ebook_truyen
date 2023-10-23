'use strict'

import express from 'express'
import AdminController from '../controllers/admin.controller.js'
import asyncHandler from '../core/asyncHandler.js'
import authentication from '../auth/user.auth.js'

import upload from '../middlewares/upload.middleware.js'
import checkAdmin from '../auth/admin.auth.js'

const routerAdmin = express.Router()

routerAdmin.use(authentication)
routerAdmin.use(checkAdmin)

routerAdmin.get('/', asyncHandler(AdminController.home))
routerAdmin.post('/new-ebook', upload.single('image'), asyncHandler(AdminController.newEbook))
routerAdmin.get('/delete-ebook/:ebook_id', asyncHandler(AdminController.deleteEbook))
routerAdmin.patch('/edit-ebook/:ebook_id', AdminController.editEbook)

export default routerAdmin