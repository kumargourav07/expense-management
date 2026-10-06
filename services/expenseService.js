import Expense   from "../models/Expense.js";;

import User from "../models/User.js";;

export const createExpense = async (expenseData) => {
    const user = await User.findById(expenseData.userId);
    if (!user) {
        throw new Error("User not found");
    }
    const expense = await Expense.create(expenseData);
    return expense;
}

export const getALLExpenses = async () => {
    const expenses = await Expense.find();
    return expenses

}

export const getExpenseById = async (id) => {
    const expense = await Expense.findById(id);
    
    if (!expense) {
        throw new Error("Expense not found");
    }
    return expense;
};

export const updateExpense = async (id, expenseData) => {
    const expense = await Expense.findByIdAndUpdate(id, expenseData, { new: true });
    if (!expense) {
        throw new Error("Expense not found");
    }
    return expense;
};

export const deleteExpense = async (id) => {
    const expense = await Expense.findByIdAndDelete(id);
    if (!expense) {
        throw new Error("Expense not found");
    }
    return expense;
};