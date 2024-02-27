import Agent from "../models/agent.model.js";

export const createAgent = async (req, res, next) => {
try {
    const agent = await Agent.create(req.body);
    return res.status(201).json(Agent);
} catch (error) {
    next(error);
}
}