"use server";

import { Resend } from "resend";

export interface ContactInput {
  name: string;
  email: string;
  company: string;
  stage: string;
  budget: string;
  timeline: string;
  needs: string[];
  description: string;
}

export async function submitContactForm(data: ContactInput) {
  try {
    // Log to server console stdout
    console.log("=== NEW INBOUND LEAD SUBMISSION ===");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Company:", data.company);
    console.log("Startup Stage:", data.stage);
    console.log("Budget:", data.budget);
    console.log("Timeline:", data.timeline);
    console.log("Needs:", data.needs.join(", "));
    console.log("Description:", data.description);
    console.log("====================================");

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("[Resend Warning]: RESEND_API_KEY is not defined in env variables. Lead was logged to console, but email alerts are disabled.");
      // Mock delay for fallback locally
      await new Promise((resolve) => setTimeout(resolve, 600));
      return { success: true, emailSent: false };
    }

    const resend = new Resend(apiKey);
    
    // Send email alert to user
    await resend.emails.send({
      from: "Portfolio Lead <leads@ashwanisng.com>",
      to: "ashwanicena5@gmail.com",
      subject: `New Lead: ${data.name} (${data.company || "No Company"})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="border-bottom: 2px solid #3b82f6; padding-bottom: 10px; color: #3b82f6;">New Enquiry Received</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${data.company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Startup Stage:</td>
              <td style="padding: 8px 0;">${data.stage}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Budget Bracket:</td>
              <td style="padding: 8px 0;">${data.budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Timeline:</td>
              <td style="padding: 8px 0;">${data.timeline}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Services Needed:</td>
              <td style="padding: 8px 0;">${data.needs.join(", ") || "None selected"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <strong style="display: block; margin-bottom: 8px;">Project Brief / Description:</strong>
            <p style="margin: 0; line-height: 1.5; white-space: pre-wrap;">${data.description || "No description provided."}</p>
          </div>
        </div>
      `
    });

    return { success: true, emailSent: true };
  } catch (error) {
    console.error("Failed to process contact submission:", error);
    return { success: false, error: "Submission failed" };
  }
}
