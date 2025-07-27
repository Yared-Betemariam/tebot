import { db } from "@/db";
import { users } from "@/db/schema";
import { profileSchema } from "@/schemas";
import { eq } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  updateProfile: protectedProcedure
    .input(profileSchema)
    .mutation(async (opts) => {
      await db
        .update(users)
        .set(opts.input)
        .where(eq(users.email, opts.ctx.session.user.email));

      return { success: true, message: "User successfully updated!" };
    }),
});

export type AppRouter = typeof appRouter;
