import Owner from "../models/owner.model.js";

export const createOwner = async (req, res, next) => {
try {
    const owner = await Owner.create(req.body);
    return res.status(201).json(owner);
} catch (error) {
    next(error);
}
}