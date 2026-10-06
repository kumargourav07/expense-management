import express from "express";
import { createExpenseController } from "../controllers/expenseController.js";
import { getAllExpensesController } from "../controllers/expenseController.js";
import { getExpenseByIdController } from "../controllers/expenseController.js";
import { updateExpenseController } from "../controllers/expenseController.js";
import { deleteExpenseController } from "../controllers/expenseController.js";
import { validateExpense } from "../validations/expenseValidation.js";

const router = express.Router();

router.post("/", validateExpense, createExpenseController);
router.get("/", getAllExpensesController);
router.get("/:id", getExpenseByIdController);
router.put("/:id", updateExpenseController);
router.delete("/:id", deleteExpenseController);


export default router;