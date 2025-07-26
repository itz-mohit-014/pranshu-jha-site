// app/api/contact/route.ts
import { google } from "googleapis";
import { JWT } from "google-auth-library";
import { NextResponse } from 'next/server';

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME = process.env.SHEET_NAME;

export async function POST(req: Request) {  
  const body = await req.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !message)
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

  try {
    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")!,
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: "v4", auth });
    const range = `${SHEET_NAME}!A:E`;
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, subject || "", message, timestamp]],
      },
    });

    return NextResponse.json({ result: "success", message: "Submitted successfully!" },  { status: 201 });
  } catch (err) {
    console.error("Sheets API Error:", err);
    return NextResponse.json({ error: "Failed to write to Google Sheet" },  { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export function PUT() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export function DELETE() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export function PATCH() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
