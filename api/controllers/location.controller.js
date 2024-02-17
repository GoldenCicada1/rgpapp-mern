import Location from "../models/location.model.js";

export const createLocation = async (req, res, next) => {
try {
    const location = await Location.create(req.body);
    return res.status(201).json(location);
} catch (error) {
    next(error);
}
}