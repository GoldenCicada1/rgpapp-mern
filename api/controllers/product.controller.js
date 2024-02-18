import Product from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
} catch (error) {
    next(error);
}
};

export const getProductById = async (req, res, next) => {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId)
      .populate({
        path: 'building_id',
        populate: {
          path: 'land_id',
          populate: {
            path: 'location_id'
          }
        }
      })
      .populate('media_id');
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };