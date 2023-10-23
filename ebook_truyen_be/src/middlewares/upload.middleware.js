import path from 'path'
import multer from 'multer'

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/assets/images')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

let upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpeg'
        ) {
            callback(null, true)
        } else {
            console.log('Only png and jpg file supported');
            callback(null, false)
        }
    },
    limits: {
        fieldSize: 1024 * 1024 * 2
    }
})

export default upload