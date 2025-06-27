// app/api/contact/route.js - SIMPLIFIED VERSION (no confirmation email)
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    console.log("API route called");

    // Check environment variables
    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { error: "Server configuration error - missing email credentials" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
      timeline,
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Create transporter
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
        rejectUnauthorized: false,
      },
    });

    // Email content
    const emailContent = `
      New Contact Form Submission from ${name}
      
      Contact Details:
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone || "Not provided"}
      - Company: ${company || "Not provided"}
      
      Project Information:
      - Project Type: ${projectType || "Not specified"}
      - Budget Range: ${budget || "Not specified"}
      - Timeline: ${timeline || "Not specified"}
      
      Message:
      ${message}
      
      ---
      This email was sent from the contact form on refinewebstudio.com
    `;

    // Send email to you (the main important email)
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: "hello@refinewebstudio.co.uk",
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Project Information</h3>
            <p><strong>Project Type:</strong> ${
              projectType || "Not specified"
            }</p>
            <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
            <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">This email was sent from the contact form on refinewebstudio.com</p>
        </div>
      `,
    });

    console.log("Email sent successfully!");
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Detailed error:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
