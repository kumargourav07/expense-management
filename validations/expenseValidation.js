export const validateExpense = (req, res, next) => {
    const { userId, amount, description, category, date } = req.body;

    if(!userId) {
        return res.status(400).json({
            success: false,
            message: "User ID is required"
        });
    }

    if(!amount || amount <= 0) {
        return res.status(400).json({
            success: false,
            message: "Valid amount is required"
        });
    }

    if(!description) {
        return res.status(400).json({
            success: false,
            message: "Description is required"
        });
    }

    if(!category) {
        return res.status(400).json({
            success: false,
            message: "Category is required"
        });
    }

    next();
};