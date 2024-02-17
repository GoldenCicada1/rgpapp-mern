import Building from "../models/building.model.js";

export const createBuilding = async (req, res, next) => {
try {
    const building = await Building.create(req.body);
    return res.status(201).json(building);
} catch (error) {
    next(error);
}
}