import express, { Express, Request, Response, NextFunction } from "express";
import { connectDB } from "./config/db";
import routes from "./routes";
import winston from "winston";

const app: Express = express();
connectDB();

app.use(express.json());

// Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use("/api", routes);

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ msg: "Server error" });
});

export default app;
