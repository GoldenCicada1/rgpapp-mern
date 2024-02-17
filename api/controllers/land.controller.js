import Land from "../models/land.model.js";

export const createLand = async (req, res, next) => {
try {
    const land = await Land.create(req.body);
    return res.status(201).json(land);
} catch (error) {
    next(error);
}
}