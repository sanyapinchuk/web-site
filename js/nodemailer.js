const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,  //true for 465
        secure: true,
        auth: {
            user: 'intellecttrading@mail.ru',
            pass: 'Wrd2J8HS2QzSw72Qi4ac'
        }
    },
    {
        from: 'Bot web-site Intelligence Trading <intellecttrading@mail.ru>',
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer