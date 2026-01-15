import { AsyncLocalStorage } from "async_hooks";

export interface RequestContext {
  /** Access token obtained from hosted mode auth middleware */
  accessToken?: string;
}

/**
 * Async local storage for request-scoped context.
 * This allows passing the access token from the HTTP middleware to the client
 * without modifying the MCP SDK's tool handler signatures.
 */
export const requestContext = new AsyncLocalStorage<RequestContext>();

/**
 * Get the current request's access token, if any.
 * Returns undefined if not in a request context or no token was set.
 */
export function getRequestAccessToken(): string | undefined {
  return requestContext.getStore()?.accessToken;
}
