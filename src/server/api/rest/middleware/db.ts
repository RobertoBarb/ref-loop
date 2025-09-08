import type { MiddlewareHandler } from "hono";

// import { db } from "@/server/db"; // Commentato per ora - DB non necessario

/**
 * Database middleware - DISABLED for this app
 * Database connection is not required, but this middleware is kept for future use
 */
export const withDatabase: MiddlewareHandler = async (c, next) => {
  // Skip database connection for now
  // c.set("db", db);

  await next();
};
