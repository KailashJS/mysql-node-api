import express from "express";
import appRouter from "./routes/index.js";
import { config } from "dotenv";
config();
import { connectToDatabase } from "./db/index.js";

const app = express();

// Middleware Section 
app.use(express.json());

// Route API endpoint section
app.use("/api/v1/products", appRouter)

const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log("Server Open At : ", PORT));
}).catch(err => {
    console.log("Error occured with MySQL connection. Error = ", err);
    process.exit(0)
})