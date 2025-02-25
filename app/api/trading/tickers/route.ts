import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createTicker, getAllTickersForUser } from "@/db/queries/tickers-queries";

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  try {
    const tickers = await getAllTickersForUser(userId);
    return NextResponse.json({ tickers });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tickers" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { symbol, price } = body;
    if (!symbol) {
      return NextResponse.json({ error: "Missing symbol" }, { status: 400 });
    }

    const newTicker = await createTicker({
      userId,
      symbol,
      price
    });

    return NextResponse.json({ ticker: newTicker });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create ticker" }, { status: 500 });
  }
}