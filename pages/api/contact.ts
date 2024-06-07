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
  const { email, service, description } = req.body;
  console.log(req.body);

  if (!email || !service) {
    res.status(400).json({ message: "please provide email and service" });
  }
  const isEmailValid = validator.isEmail(email);
  if (!isEmailValid) {
    res.status(400).json({ message: "Please enter a valid email" });
  }
  // create a transporter
  
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false,
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
  // send email
  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.COMPANY_EMAIL,
      subject: "Service request ✔",
      html: `
        <h1 style="color: #333; font-size: 24px; font-weight: bold;">Hello, clean up service request message from ${email}</h1>
        <h4 style="color: #333; font-size: 24px; font-weight: bold;"> The service request type is ${service}</h4>
        <p style="color: #666; font-size: 16px;">${description}</p>`,
    });
    console.log(info);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: JSON.stringify(error) });
  }
  res.status(200).json({ message: "Success we will get back to you soon!" });
}
