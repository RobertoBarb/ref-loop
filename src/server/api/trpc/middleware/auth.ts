import { TRPCError } from "@trpc/server";

import { type createTRPCContext } from "../init";

type TRPCContextType = Awaited<ReturnType<typeof createTRPCContext>>;

/**
 * Middleware for authenticated procedure execution.
 * 
 * DISABLED: Authentication is not required for this app
 * This middleware is kept for future use if authentication is needed
 */
export const authMiddleware = async <TReturn>(opts: {
  ctx: TRPCContextType;
  next: (opts: { ctx: Partial<TRPCContextType> }) => Promise<TReturn>;
}) => {
  // Skip authentication for now
  return opts.next({
    ctx: opts.ctx,
  });
};
