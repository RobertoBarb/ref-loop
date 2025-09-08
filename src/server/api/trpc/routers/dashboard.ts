import { createTRPCRouter, publicProcedure } from "../init";

export const dashboardRouter = createTRPCRouter({
  privateData: publicProcedure.query(({ ctx }) => {
    return {
      message: "This is public data (no authentication required)",
      userId: "anonymous",
    };
  }),
});
