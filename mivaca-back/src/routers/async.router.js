import Router from "express-promise-router"
import UserRouter from '../routers/user.router.js';
import groupRouter from '../routers/groups.router.js';
import { 
    connectDatabase, 
    commitDatabase, 
    rollbackDatabase 
} from "../lib/database.middleware.js";


const AsyncRouter = () => {
    const router = Router();

    router.use(connectDatabase);
    router.use("/groups", groupRouter());
    router.use("/users", UserRouter());
    router.use(commitDatabase);
    router.use(rollbackDatabase);

    return router;
}

export default AsyncRouter;