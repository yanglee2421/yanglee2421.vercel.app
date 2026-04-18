import { appendCorsHeaders, appendCorsPreflightHeaders } from "#imports";
import type { EventHandlerRequest, H3Event } from "h3";

const allowedOrigins = new Set([
  "https://yanglee2421.github.io",
  "https://yanglee2421.vercel.app",
  "https://yanglee2421.netlify.app",
  "http://localhost:3000",
  "http://localhost:3006",
]);

export const appendCors = (e: H3Event<EventHandlerRequest>) => {
  appendCorsHeaders(e, {
    origin: (o) => allowedOrigins.has(o),
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });
};

export const preflightCors = (e: H3Event<EventHandlerRequest>) => {
  appendCorsPreflightHeaders(e, {
    origin: (o) => allowedOrigins.has(o),
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });
};
