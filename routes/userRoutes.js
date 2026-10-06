import express from "express";
import { createUserController } from "../controllers/userController.js";
import { validateUser } from "../validations/userValidation.js";

const router = express.Router();

router.post("/", validateUser, createUserController);

export default router;

