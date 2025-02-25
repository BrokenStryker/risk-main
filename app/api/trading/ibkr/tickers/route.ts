"use server"

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Retain the GET function as is
export async function GET() {
  const { userId } = auth();
  
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // This remains a placeholder for fetching all tickers.
    // Adjust as needed according to actual IBKR API structure.
    const tickers = { message: "GET endpoint not modified" };
    return NextResponse.json({ tickers });
  } catch (error) {
    console.error("Error fetching from IBKR:", error);
    return NextResponse.json({ error: "Failed to fetch tickers from IBKR" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { userId } = auth();
  
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { symbol } = await request.json();
    const { spawnSync } = await import("child_process");
    const pythonPath = process.env.PYTHON_PATH || "python";
    const result = spawnSync(pythonPath, ["python/trading_bot.py", symbol], { encoding: "utf-8" });
    if (result.error) {
      console.error("Error calling python script:", result.error);
      return NextResponse.json({ error: "Failed to fetch ticker from IBKR via Python" }, { status: 500 });
    }
    const output = result.stdout.trim();
    const price = parseFloat(output);
    return NextResponse.json({ ticker: { symbol, price } });
  } catch (error) {
    console.error("Error fetching from IBKR:", error);
    return NextResponse.json({ error: "Failed to fetch ticker from IBKR" }, { status: 500 });
  }
}