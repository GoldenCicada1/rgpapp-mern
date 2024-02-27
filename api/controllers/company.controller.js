import Company from "../models/company.model.js";

export const createCompany = async (req, res, next) => {
try {
    const company = await Company.create(req.body);
    return res.status(201).json(company);
} catch (error) {
    next(error);
}
}