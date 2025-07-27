import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
