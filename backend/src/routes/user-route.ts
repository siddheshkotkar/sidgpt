import { Router } from "express";
import { getAllusers, userSignup } from "../controllers/user-controller.js";

const userRoute = Router();

userRoute.get("/", getAllusers)

userRoute.post("/signup", userSignup)

export default userRoute;