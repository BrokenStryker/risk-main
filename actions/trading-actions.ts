"use server"

import { db } from "@/db/db"
import { tradingBotsTable, tradesTable, InsertTradingBot, SelectTradingBot } from "@/db/schema"
import { ActionState } from "@/types"
import { eq } from "drizzle-orm"

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:8000"

export async function startTradingBotAction(
  config: InsertTradingBot
): Promise<ActionState<SelectTradingBot>> {
  try {
    // Create bot record in database
    const [bot] = await db.insert(tradingBotsTable).values(config).returning()

    // Start trading bot via Python service
    const response = await fetch(`${PYTHON_SERVICE_URL}/api/trading/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ config: config.config })
    })

    if (!response.ok) {
      throw new Error("Failed to start trading bot")
    }

    return {
      isSuccess: true,
      message: "Trading bot started successfully",
      data: bot
    }
  } catch (error) {
    console.error("Error starting trading bot:", error)
    return { isSuccess: false, message: "Failed to start trading bot" }
  }
}

export async function stopTradingBotAction(
  id: string
): Promise<ActionState<void>> {
  try {
    // Stop trading bot via Python service
    const response = await fetch(`${PYTHON_SERVICE_URL}/api/trading/stop/${id}`, {
      method: "POST"
    })

    if (!response.ok) {
      throw new Error("Failed to stop trading bot")
    }

    // Update bot status in database
    await db
      .update(tradingBotsTable)
      .set({ status: "stopped" })
      .where(eq(tradingBotsTable.id, id))

    return {
      isSuccess: true,
      message: "Trading bot stopped successfully",
      data: undefined
    }
  } catch (error) {
    console.error("Error stopping trading bot:", error)
    return { isSuccess: false, message: "Failed to stop trading bot" }
  }
} 