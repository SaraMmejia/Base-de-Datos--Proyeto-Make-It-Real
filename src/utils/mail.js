const nodemailer = require('nodemailer');

module.exports = {
    transporter: nodemailer.createTransport({
        host: 'smtp.aol.com',
        port: 465,//587
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },

        tls: {
            rejectUnauthorized: false
        }

    }),

    welcome(name) {
        return `
    <body>
        <h1>Cheaper Colombia</h1>
     <h2>Bienvenido ${name}</h2>
    </body>
  `;
    },

    verify(transporter) {
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });
    }
}



