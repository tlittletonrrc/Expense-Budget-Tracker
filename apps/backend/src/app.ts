import express, {Express} from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "../config/cors";
import allocationRouter from "./api/v1/routes/allocationRoutes"

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1", allocationRouter)


export default app;