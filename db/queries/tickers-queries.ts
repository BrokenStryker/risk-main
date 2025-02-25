"use server";

import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { tickersTable, InsertTicker, SelectTicker } from "../schema/tickers-schema";

export async function getAllTickersForUser(userId: string): Promise<SelectTicker[]> {
  return db.select().from(tickersTable).where(eq(tickersTable.userId, userId));
}

export async function createTicker(data: InsertTicker): Promise<SelectTicker> {
  const [newTicker] = await db
    .insert(tickersTable)
    .values({
      userId: data.userId,
      symbol: data.symbol,
      price: data.price || null
    })
    .returning();
  return newTicker;
}