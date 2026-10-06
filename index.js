import express from  "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";



dotenv.config();

connectDB();


const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);


app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})