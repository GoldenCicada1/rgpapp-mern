import Media from "../models/media.model.js";

export const createMedia = async (req, res, next) => {
  try {
    // Use a different variable name for the created media object
    const newMedia = await Media.create(req.body);
    return res.status(201).json(newMedia); // Return the newly created media object
  } catch (error) {
    next(error);
  }
};