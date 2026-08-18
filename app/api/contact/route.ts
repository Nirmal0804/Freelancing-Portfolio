import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, ContactSubmission } from "@/lib/email/sendEmail";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let body: any;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON request payload." },
      { status: 400 }
    );
  }

  try {
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const projectType =
      typeof body?.projectType === "string" ? body.projectType.trim() : "";
    const budget = typeof body?.budget === "string" ? body.budget.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    // Server-side validation
    if (!name) {
      return NextResponse.json(
        { success: false, message: "Name is required." },
        { status: 400 }
      );
    }
    if (name.length > 100) {
      return NextResponse.json(
        { success: false, message: "Name must not exceed 100 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (email.length > 200) {
      return NextResponse.json(
        { success: false, message: "Email must not exceed 200 characters." },
        { status: 400 }
      );
    }

    if (!projectType) {
      return NextResponse.json(
        { success: false, message: "Project type is required." },
        { status: 400 }
      );
    }
    if (projectType.length > 100) {
      return NextResponse.json(
        { success: false, message: "Project type must not exceed 100 characters." },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message is required." },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide more details in your message (minimum 10 characters).",
        },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message must not exceed 5000 characters.",
        },
        { status: 400 }
      );
    }

    if (phone && phone.length > 50) {
      return NextResponse.json(
        { success: false, message: "Phone number must not exceed 50 characters." },
        { status: 400 }
      );
    }
    if (budget && budget.length > 100) {
      return NextResponse.json(
        { success: false, message: "Budget must not exceed 100 characters." },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      name,
      email,
      phone: phone || undefined,
      projectType,
      budget: budget || undefined,
      message,
    };

    const result = await sendContactEmail(submission);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your enquiry. Please try again or contact me directly.",
      },
      { status: 500 }
    );
  }
}
