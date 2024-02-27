import LandOwnership from "../models/landOwnership.model.js";

export const createLandOwnership = async (req, res, next) => {
try {
    const landOwnership = await LandOwnership.create(req.body);
    return res.status(201).json(landOwnership);
} catch (error) {
    next(error);
}
}