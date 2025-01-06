import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/Auth";

const router = express.Router();
router.post("/",jwtCheck, MyUserController.createCurrentUser as express.RequestHandler);

export default router;