import { Request, Response } from "express";
import { Session } from "express-session";

type SessionTypes = {
  userId: string;
};

export type ServerContext = {
  req: Request & { session: Session & SessionTypes };
  res: Response;
};
