import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  documents: defineTable({
    userId: v.id("users"),
    title: v.string(),
    ownerId: v.string(),
    initialContent: v.optional(v.string()),
  })
    .index("by_user_id", ["userId"])
    .index("by_owner_id", ["ownerId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["ownerId", "userId"],
    }),
});

export default schema;
