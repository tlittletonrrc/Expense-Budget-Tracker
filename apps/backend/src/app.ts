import express, {Express} from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "../config/cors";
import allocationRouter from "./api/v1/routes/allocationRoutes"
import userRouter from "./api/v1/routes/userRoutes"

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1", allocationRouter)
app.use("/api/v1", userRouter)


export default app;