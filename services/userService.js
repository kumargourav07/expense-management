import User from "../models/User.js";

export const createUser = async (userData) => {
    const user = await User.create(userData);
    return user;
}

