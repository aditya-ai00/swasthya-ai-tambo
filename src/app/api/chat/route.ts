import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  return NextResponse.json({
    reply: `I understand you said: "${message}". 
If symptoms are severe or persistent, please consult a doctor.`,
  });
}
