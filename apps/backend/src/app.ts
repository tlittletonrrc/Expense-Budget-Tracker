import express, {Express} from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "../config/cors";
import allocationRouter from "./api/v1/routes/allocationRoutes"
import userRouter from "./api/v1/routes/userRoutes"
import accountRouter from "./api/v1/routes/accountsRoutes";
import { clerkMiddleware } from "@clerk/express";

const app: Express = express();

dotenv.config();
app.use(cors(corsOptions));
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/v1", allocationRouter)
app.use("/api/v1", userRouter)
app.use("/api/v1", accountRouter)


export default app;