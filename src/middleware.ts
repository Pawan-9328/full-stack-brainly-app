import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;

  const token = header?.startsWith("Bearer ")
    ? header.split(" ")[1]
    : null;

  if (!token) {
    return res.status(401).json({
      message: "Token missing or invalid format"
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_PASSWORD) as { id: string };

    req.userId = decoded.id; // ✅ now works (after global typing)

    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired token"
    });
  }
};