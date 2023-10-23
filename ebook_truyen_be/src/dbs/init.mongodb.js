'use strict'

import mongoose from "mongoose"
import config from "../configs/config.mongodb.js"

const { db } = config

const connectString = `mongodb://127.0.0.1:27017/${db.name}`

class Database {

    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        // ENV Dev
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectString)
            .then(_ => {
                console.log('Connect MOngoDB Success');
            })
            .catch(err => {
                console.log('Error Connect', err);
            })
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

export default instanceMongodb