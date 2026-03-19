export {}; // 👈 VERY IMPORTANT

declare global {
  namespace Express {
    interface Request {
      userId: string; // make it required
    }
  }
}