import 'dotenv/config'

const dev = {
    db: {
        name: process.env.DEV_DB_NAME
    }
}

const pro = {
    db: {
        name: process.env.PRO_DB_NAME
    }
}

const config_raw = { dev, pro }
const env = process.env.NODE_ENV || 'dev'
const config = config_raw[env]

export default config