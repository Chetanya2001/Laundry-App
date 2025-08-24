import * as dotenv from "dotenv";
import http from "http";
import app from "./app";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
