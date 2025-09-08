import type { MiddlewareHandler } from "hono";

/**
 * Auth middleware - DISABLED for this app
 * Authentication is not required, but this middleware is kept for future use
 */
export const withAuth: MiddlewareHandler = async (c, next) => {
  // Skip authentication for now
  // Set empty session on context for compatibility
  c.set("session", null);

  await next();
};
