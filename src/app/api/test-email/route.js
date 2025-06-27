// app/api/test-email/route.js
// Create this file temporarily to test your SMTP settings
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // Test the connection
    await transporter.verify();

    // Send a test email
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL, // Send to yourself
      subject: "SMTP Test - Connection Working!",
      text: "If you receive this email, your SMTP settings are working correctly.",
    });

    return NextResponse.json({
      success: true,
      message: "SMTP connection successful and test email sent!",
    });
  } catch (error) {
    console.error("SMTP Test Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE this file after testing!
