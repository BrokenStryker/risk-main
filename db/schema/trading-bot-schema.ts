import { pgEnum, pgTable, text, timestamp, uuid, numeric } from "drizzle-orm/pg-core"

export const tradingStatusEnum = pgEnum("trading_status", ["active", "paused", "stopped"])

export const tradingBotsTable = pgTable("trading_bots", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  status: tradingStatusEnum("status").notNull().default("stopped"),
  config: text("config").notNull(), // JSON string of bot configuration
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export const tradesTable = pgTable("trades", {
  id: uuid("id").defaultRandom().primaryKey(),
  botId: uuid("bot_id")
    .references(() => tradingBotsTable.id, { onDelete: "cascade" })
    .notNull(),
  symbol: text("symbol").notNull(),
  side: text("side").notNull(), // buy/sell
  quantity: numeric("quantity").notNull(),
  price: numeric("price").notNull(),
  status: text("status").notNull(), // filled/pending/cancelled
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertTradingBot = typeof tradingBotsTable.$inferInsert
export type SelectTradingBot = typeof tradingBotsTable.$inferSelect
export type InsertTrade = typeof tradesTable.$inferInsert
export type SelectTrade = typeof tradesTable.$inferSelect 