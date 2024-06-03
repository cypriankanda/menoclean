import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import validator from "validator";
type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { email, question } = req.body;
  if (!email || !question) {
    res.status(400).json({ message: "please provide email and service" });
  }
  const isEmailValid = validator.isEmail(email);
  console.log(isEmailValid);
  if (!isEmailValid) {
    res.status(400).json({ message: "Please enter a valid email" });
  }
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.COMPANY_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.COMPANY_EMAIL,
      subject: "Service request ✔",
      html: `
        <h1 style="color: #333; font-size: 24px; font-weight: bold;">Hello, a question request message from ${email}</h1>
        <p style="color: #666; font-size: 16px;">${question}</p>`,
    });
    console.log(info); // only in development mode.
  } catch (error) {
    res.status(400).json({ message: "the email credentials are invalid" });
    console.log(error);
  }
  res.status(200).json({ message: "Success we will get back to you soon!" });
}
