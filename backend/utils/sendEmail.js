import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Gym Website" <${process.env.SMTP_MAIL}>`,
    to: options.email,             
    replyTo: options.userEmail,  
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
