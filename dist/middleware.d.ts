import type { NextFunction, Request, Response } from "express";
interface CustomRequest extends Request {
    userId?: string;
}
export declare const userMiddleware: (req: CustomRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=middleware.d.ts.map