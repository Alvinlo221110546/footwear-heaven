import Best from '../models/Best.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Best.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Best.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Best.create({ name, price, description });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Best.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const { name, price, description } = req.body;
    await product.update({ name, price, description });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Best.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    await product.destroy();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};