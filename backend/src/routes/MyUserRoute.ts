import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";


const router = express.Router();

//Create User
router.post("/", jwtCheck, MyUserController.createCurrentUser as express.RequestHandler);

// Update User
router.put(
    "/",
    jwtCheck,
    jwtParse as express.RequestHandler,
    validateMyUserRequest as express.RequestHandler[], // Explicitly type as an array of RequestHandler
    MyUserController.updateCurrentUser as express.RequestHandler
);

router.get("/", jwtCheck, jwtParse as express.RequestHandler, MyUserController.getCurrentUser as express.RequestHandler);

export default router;