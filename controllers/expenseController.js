import  { createExpense } from "../services/expenseService.js";
import { getALLExpenses } from "../services/expenseService.js";
import { getExpenseById } from "../services/expenseService.js";
import { updateExpense } from "../services/expenseService.js";
import { deleteExpense } from "../services/expenseService.js";

export const createExpenseController = async (req, res) => {
    try {
        const expense = await createExpense(req.body);
        res.status(201).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

};

export const getAllExpensesController = async (req, res) => {
    try {
        const expenses = await getAllExpenses();
        res.status(200).json({
            success: true,
            data: expenses
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getExpenseByIdController = async (req, res) => {
    try {
        const expense = await getExpenseById(req.params.id);
        res.status(200).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const updateExpenseController = async (req, res) => {
    try{
        const expense = await updateExpense(req.params.id, req.body);
        res.status(200).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteExpenseController = async (req, res) => {
    try {
        const expense = await deleteExpense(req.params.id);
        res.status(200).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}