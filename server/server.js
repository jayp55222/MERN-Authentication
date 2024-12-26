import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoute.js";

const app = express();

const port = process.env.PORT || 5173;
connectDB();

const allowedOrigins =['http://localhost:5173']



app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));


//Api Endpoint
app.get('/',(req,res)=>res.send("Api working"));
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

app.listen(port, () => {
  console.log(`Server started on PORT:${port}`);
});