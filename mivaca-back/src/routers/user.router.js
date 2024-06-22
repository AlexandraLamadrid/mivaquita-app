import Router from "express-promise-router";
import Controller from "../controllers/user.controller.js";
import continuator from "../lib/continue.decorator.js";

const createUserRouter = () => {

    const router = Router();
    const controller = Controller();

    router.get('/:id', continuator(controller.getById));
    router.post('/', continuator(controller.signUp));

    return router;
    
};

export default createUserRouter;