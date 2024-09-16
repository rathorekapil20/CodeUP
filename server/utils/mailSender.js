const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    // console.log(email, title, body);
    // let transporter = nodemailer.createTransport({
    //   host: "your-smtp-host", // SMTP server hostname
    //   port: 587, // default port for SMTP
    //   secure: false, // true for 465, false for other ports
    //   service: "mail",
    //   auth: {
    //     user: "kapilrathore210381@acropolis.in",
    //     pass: "Fionix0720",
    //   },
    // });
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

    // console.log("Transporter object:", transporter);

    // let info = await transporter.sendMail({
    //   from: "CodeUp || Horror",
    //   to: `${email}`,
    //   subject: `${title}`,
    //   text: `ye raha email`,
    // });
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "OTP Verification",
        // text: "Ye raha otp",
        html: body,
      };
  
      const res = await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });

    console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
