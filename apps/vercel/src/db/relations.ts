import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (relation) => {
  return {
    users: {
      sessions: relation.many.sessions({
        from: relation.users.id,
        to: relation.sessions.userId,
      }),
    },
    sessions: {
      user: relation.one.users({
        from: relation.sessions.userId,
        to: relation.users.id,
      }),
    },
  };
});
