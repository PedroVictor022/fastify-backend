import { Router} from "express"
import {  UserController } from "../controller/UserController";

const userController = new UserController();

export const router = Router();
router.get("/allusers", userController.index)
router.post("/create", userController.store)