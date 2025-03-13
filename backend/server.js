// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

const app = express();

dotenv.config();
const PORT =  process.env.PORT || 5000

app.get('/',  (req, res) => {
    res.send("hello world....");
})

app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));


// npm run dev - (from frontend dir)
// npm run server - from root dir