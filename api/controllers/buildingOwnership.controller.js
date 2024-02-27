import BuildingOwnership from "../models/buildingOwnership.model.js";

export const createBuildingOwnership = async (req, res, next) => {
try {
    const buildingOwnership = await BuildingOwnership.create(req.body);
    return res.status(201).json(buildingOwnership);
} catch (error) {
    next(error);
}
}