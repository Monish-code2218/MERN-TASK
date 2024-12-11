import express from "express";
import UserRoutes from "./Userrouter";
const router = express.Router();

router.use("/user", UserRoutes);

export default router;