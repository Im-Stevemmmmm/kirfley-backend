import { Request, Response } from "express";
import { Session } from "express-session";

type SessionTypes = {
    userId: number;
};

export type AppContext = {
    req: Request & { session: Session & SessionTypes };
    res: Response;
};
