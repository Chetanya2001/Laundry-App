import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

// Auth routes
router.post("/signup", UserController.signup);
router.post("/signin", UserController.signin);

export default router;
