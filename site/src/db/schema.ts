import {
  pgTable,
  timestamp,
  varchar,
  text,
  integer,
  index,
} from "drizzle-orm/pg-core";
import { generateId } from "./utils";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: varchar("id", { length: 24 })
    .primaryKey()
    .$defaultFn(() => generateId()), // Automatically generate on insert
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const subscriptions = pgTable(
  "subscriptions",
  {
    id: varchar("id", { length: 24 })
      .primaryKey()
      .$defaultFn(() => generateId()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id),

    lemonSqueezyId: text("lemon_squeezy_id").unique(),
    status: varchar("status", { length: 64 }),
    renewsAt: timestamp("renews_at"),
    endsAt: timestamp("ends_at"),
    price: varchar("price", { length: 64 }),
    variantId: integer("variant_id"),

    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at")
      .defaultNow()
      .notNull()
      .$onUpdate(() => sql`now()`),
  },
  (table) => [index("user_id_idx").on(table.userId)]
);

export type User = typeof users.$inferSelect;
export type Subscription = typeof subscriptions.$inferSelect;
