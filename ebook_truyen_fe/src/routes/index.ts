import { ComponentType } from "react";

import {
    Home, Ebook, Guidance, Admin, SignIn, LogIn,
    ForgotPassword, ResetPassword, Page404,
    WaitingVerification, WaitingResetPw
} from "../pages";

interface Route {
    path: string,
    component: ComponentType
}

const publicRoutes: Route[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/ebook/:slug',
        component: Ebook
    },
    {
        path: '/guidance',
        component: Guidance
    },
    {
        path: '/admin-secret',
        component: Admin
    },
    {
        path: '/signIn-secret',
        component: SignIn
    },
    {
        path: '/logIn-secret',
        component: LogIn
    },
    {
        path: '/forgot-password-secret',
        component: ForgotPassword
    },
    {
        path: '/reset-password-secret/:username_encode',
        component: ResetPassword
    },
    {
        path: '/page404',
        component: Page404
    },
    {
        path: 'signin-secret/waiting-verification',
        component: WaitingVerification
    },
    {
        path: '/waiting-reset-password',
        component: WaitingResetPw
    }
]

const privatePublic: Route[] = []

export {
    publicRoutes,
    privatePublic
}