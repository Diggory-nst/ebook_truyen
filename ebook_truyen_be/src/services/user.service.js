'use strict'

import CustomError from "../core/error.response.js"
import userModel from "../models/user.model.js"
import { reasonPhrases } from "../const/httpStatusCode.js"
import bycrypt from 'bcrypt'
import { getShortInfo } from "../utils/get_short_info.js"
import createToken from "../utils/create_token.js"
import keyTokenModel from "../models/key_token.model.js"

import sendVerificationEmail from "../utils/verification_email.js"

class UserService {

    static signUp = async ({ name, email, password }, domain) => {

        const user_email_exists = await userModel.findOne({ email }).lean()
        if (user_email_exists) throw new CustomError(reasonPhrases.FORBIDDEN, 'Email đã tồn tại')

        const user_name_exists = await userModel.findOne({ name }).lean()
        if (user_name_exists) throw new CustomError(reasonPhrases.FORBIDDEN, 'Tên đã tồn tại')

        const password_hash = await bycrypt.hash(password, 10)
        const new_user = await userModel.create({ name, email, password: password_hash })

        if (new_user) {

            const username = new_user.name
            const username_encode = btoa(username)
            const fromMail = new_user.email

            const mail_subject = 'Vui lòng click để kích hoạt tài khoản'
            const mail_template = `
                <p>
                Vui lòng click vào đường link phía dưới để kích hoạt tài khoản
                </p>

                <p>htpp://${domain}/user/activate/${username_encode}</p>
            `

            sendVerificationEmail(fromMail, mail_subject, mail_template)

            return
        }

        return
    }

    static activate = async (username_encode) => {

        const name = atob(username_encode)
        const found_user = await userModel.findOne({ name })
        if (!found_user) throw CustomError(reasonPhrases.UNAUTHORIZED, "Không Tìm Thấy User")
        found_user.status = 'active'
        await found_user.save()
    }

    static logIn = async ({ name, password }) => {

        const found_user = await userModel.findOne({ name }).lean()
        if (!found_user) throw new CustomError(reasonPhrases.FORBIDDEN, `Tên đăng nhập không tồn tại`)

        const result = await new Promise((resolve, reject) => {
            bycrypt.compare(password, found_user.password, (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

        if (!result) throw new CustomError(reasonPhrases.UNAUTHORIZED, 'Sai mật khẩu. Vui lòng thử lại')

        const check_status = found_user.status

        if (check_status !== 'active') throw new CustomError(reasonPhrases.BAD_REQUEST, 'Account has not been activated')

        const tokens = await createToken({ user_id: found_user._id, name, email: found_user.email })

        return {
            user: getShortInfo({ fields: ['_id', 'name'], object: found_user }),
            tokens
        }
    }

    static logOut = async (key) => {
        const key_id = key._id
        return await keyTokenModel.deleteOne({ _id: key_id })
    }

    static forgotPassword = async ({ email }, domain) => {
        const found_user = await userModel.findOne({ email }).lean()
        if (!found_user) throw new CustomError(reasonPhrases.FORBIDDEN, `Email không tồn tại`)

        const username = found_user.name
        const username_encode = btoa(username)
        const fromMail = found_user.email

        const mail_subject = 'Vui lòng click để lấy lại mật khẩu'
        const mail_template = `
            <p>
            Vui lòng click vào đường link phía dưới để lấy lại mật khẩu
            </p>

            <p>http://localhost:5173/reset-password-secret/${username_encode}</p>
        `
        sendVerificationEmail(fromMail, mail_subject, mail_template)
    }

    static resetPassword = async (username_encode, { password }) => {
        const name = atob(username_encode)
        const found_user = await userModel.findOne({ name })
        if (!found_user) throw CustomError(reasonPhrases.UNAUTHORIZED, "Không tồn tại tài khoản")

        const password_hash = await bycrypt.hash(password, 10)
        found_user.password = password_hash
        await found_user.save()
    }
}

export default UserService