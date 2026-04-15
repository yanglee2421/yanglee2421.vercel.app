import type { H3Event, EventHandlerRequest } from "h3";
import jwt from "jsonwebtoken";
import {
  createError,
  appendCorsHeaders,
  appendCorsPreflightHeaders,
} from "#imports";
import { JWT_KEY } from "./constants";
import { prisma } from "./prisma";

export const validateJWT = async (e: H3Event<EventHandlerRequest>) => {
  const authHeader = e.headers.get("Authorization");

  if (!authHeader) {
    throw createError({
      status: 401,
      statusText: "Authorization header is missing",
      statusMessage: "Authorization header is missing",
      message: "Authorization header is missing",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    throw createError({
      status: 401,
      statusText: "Token is missing",
      statusMessage: "Token is missing",
      message: "Token is missing",
    });
  }

  const decoded = jwt.verify(token, JWT_KEY);

  if (typeof decoded !== "string") {
    throw createError({
      status: 401,
      statusText: "Invalid token",
      statusMessage: "Invalid token",
      message: "Invalid token",
    });
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      id: decoded,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  if (!currentUser) {
    throw createError({
      status: 401,
      statusText: "Invalid",
      statusMessage: "Invalid token",
      message: "Invalid token",
    });
  }

  return currentUser;
};

const allowedOrigins = new Set([
  "https://yanglee2421.github.io",
  "https://yanglee2421.vercel.app",
  "https://yanglee2421.netlify.app",
  "http://localhost:3000",
  "http://localhost:3006",
]);

export const appendCors = (e: H3Event<EventHandlerRequest>) => {
  appendCorsHeaders(e, {
    origin(o) {
      return allowedOrigins.has(o);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });
};

export const preflightCors = (e: H3Event<EventHandlerRequest>) => {
  appendCorsPreflightHeaders(e, {
    origin(o) {
      return allowedOrigins.has(o);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });
};
