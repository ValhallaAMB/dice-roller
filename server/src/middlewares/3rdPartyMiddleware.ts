import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const helmetMiddleware = helmet();
const morganMiddleware = morgan("dev");
const corsMiddleware = cors();

export { helmetMiddleware, morganMiddleware, corsMiddleware };
