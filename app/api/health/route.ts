import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "careersync",
    phase: "0-nextjs-foundation",
    timestamp: new Date().toISOString(),
  });
}
