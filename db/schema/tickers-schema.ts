import { pgTable, serial, text, numeric, timestamp } from "drizzle-orm/pg-core";

export const tickersTable = pgTable("tickers", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  symbol: text("symbol").notNull(),
  price: numeric("price"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date())
});

export type InsertTicker = {
  userId: string;
  symbol: string;
  price?: number;
};

export type SelectTicker = {
  id: number;
  userId: string;
  symbol: string;
  price: number | null;
  createdAt: Date;
  updatedAt: Date;
};