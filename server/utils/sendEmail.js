import nodemailer from 'nodemailer'

const {AUTH_USERNAME, AUTH_PASSWORD } = process.env

const transporter =  nodemailer.createTransport({
    host:  'smtp-mail.outlook.com',
    auth:{
        user: AUTH_USERNAME,
        pass: AUTH_PASSWORD,
    }
});

//test transporter

transporter.verify((error , success) => {
    if (error) {
        console.log(error)
    } else {
      console.log('Ready to send messages')  
      console.log(success)
    }
})

const sendEmail = async (mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
        return;
    } catch (error) {
        throw error
    }
}

export default sendEmail