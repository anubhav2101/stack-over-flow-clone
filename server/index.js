import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";

//importing routes pages
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Question.js";
import answerRoutes from "./routes/answer.js";
import chatbotRoutes from "./routes/chatbot.js"
import otpRoutes from "./routes/otp.js"

dotenv.config()
//sever
const app = express();

app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));

//cors middlewares

app.use(cors());
app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API ");
});

// page routes
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.use("/chatbot" , chatbotRoutes)
app.use("/otp" , otpRoutes)

//port allocation
const PORT = process.env.PORT || 5000;

//Database connection
const DATABASE_URL = process.env.CONNECTION_URL;
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
