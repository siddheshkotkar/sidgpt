import { Router } from 'express';
import userRoute from './user-route.js';
import chatRoute from './chat-route.js';
const appRouter = Router();
appRouter.use("/user", userRoute);
appRouter.use("/chats", chatRoute);
export default appRouter;
//# sourceMappingURL=index.js.map