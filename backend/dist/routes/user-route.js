import { Router } from "express";
import { getAllusers } from "../controllers/user-controller.js";
const userRoute = Router();
userRoute.get("/", getAllusers);
export default userRoute;
//# sourceMappingURL=user-route.js.map