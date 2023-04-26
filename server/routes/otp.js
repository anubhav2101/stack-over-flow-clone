import express from "express";
import { sendOTPController, verifyOTPController } from "../Controllers/Otp.js"

const router = express.Router();

router.post("/sendOTP" , sendOTPController)
router.post("/verifyOTP", verifyOTPController)

export default router