import 'dotenv/config'
import nodemailer from 'nodemailer'

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

const sendVerificationEmail = (fromMail, mail_subject, mail_template) => {

    let mailDetails = {
        from: process.env.MAIL_USER,
        to: fromMail,
        subject: mail_subject,
        html: mail_template
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
}

export default sendVerificationEmail