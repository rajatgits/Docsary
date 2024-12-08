import { query } from "./_generated/server";
import { auth } from "./auth";

export const current = query({
  handler: async (ctx) => {
    const user = await auth.getUserId(ctx);

    if (user === null) {
      return null;
    }

    return await ctx.db.get(user);
  },
});
