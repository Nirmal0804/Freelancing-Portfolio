import nodemailer from "nodemailer";

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  submission: ContactSubmission
): Promise<{ success: boolean; message: string }> {
  const smtpHost = process.env.SMTP_HOST || "smtp.zoho.in";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER || "craftedweb@zohomail.in";
  const smtpPassword = process.env.SMTP_PASSWORD;
  const contactEmail = process.env.CONTACT_EMAIL || "craftedweb@zohomail.in";

  if (!smtpPassword || !smtpUser) {
    console.error(
      "[Zoho SMTP Configuration Error]: SMTP_PASSWORD or SMTP_USER is not set in environment variables."
    );
    return {
      success: false,
      message:
        "Email delivery service is currently not configured. Please contact craftedweb@zohomail.in directly.",
    };
  }

  try {
    const isSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      requireTLS: !isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const subject = `New Crafted Web Enquiry — ${submission.projectType}`;

    const textContent = `New enquiry received from Crafted Web.

Name:
${submission.name}

Email:
${submission.email}

Phone:
${submission.phone || "Not provided"}

Project Type:
${submission.projectType}

Budget:
${submission.budget || "Not specified"}

Message:
${submission.message}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1b1b; line-height: 1.6; background-color: #fcf9f8; padding: 24px; border: 1px solid #e5e2e1;">
        <h2 style="color: #a83300; margin-top: 0; padding-bottom: 12px; border-bottom: 1px solid #e5e2e1; font-size: 20px;">
          New Crafted Web Enquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 140px; color: #59413a; vertical-align: top;">Name:</td>
            <td style="padding: 8px 0; color: #1c1b1b;">${escapeHtml(submission.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #59413a; vertical-align: top;">Email:</td>
            <td style="padding: 8px 0; color: #1c1b1b;">
              <a href="mailto:${escapeHtml(submission.email)}" style="color: #a83300; text-decoration: none;">
                ${escapeHtml(submission.email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #59413a; vertical-align: top;">Phone:</td>
            <td style="padding: 8px 0; color: #1c1b1b;">${escapeHtml(submission.phone || "Not provided")}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #59413a; vertical-align: top;">Project Type:</td>
            <td style="padding: 8px 0; color: #1c1b1b;">${escapeHtml(submission.projectType)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #59413a; vertical-align: top;">Budget:</td>
            <td style="padding: 8px 0; color: #1c1b1b;">${escapeHtml(submission.budget || "Not specified")}</td>
          </tr>
        </table>
        
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e2e1;">
          <h3 style="font-size: 15px; color: #59413a; margin-bottom: 8px;">Message:</h3>
          <div style="background-color: #ffffff; padding: 16px; border: 1px solid #e5e2e1; border-left: 3px solid #a83300; white-space: pre-wrap; font-size: 14px; color: #1c1b1b;">
            ${escapeHtml(submission.message)}
          </div>
        </div>
        
        <p style="margin-top: 24px; font-size: 12px; color: #8d7168; border-top: 1px solid #e5e2e1; padding-top: 12px;">
          Reply directly to this email to respond to ${escapeHtml(submission.name)} (${escapeHtml(submission.email)}).
        </p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Crafted Web" <${smtpUser}>`,
      to: contactEmail,
      replyTo: submission.email,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    console.log("[Zoho SMTP] Email sent successfully:", info.messageId);

    return {
      success: true,
      message: "Your enquiry has been sent successfully. I'll get back to you soon.",
    };
  } catch (err) {
    console.error("[Zoho SMTP Error]:", err);
    return {
      success: false,
      message:
        "Something went wrong while sending your enquiry. Please try again or contact me directly.",
    };
  }
}
