import Keranjangs from '../models/Keranjangs.js';

export const getCartItems = async (req, res) => {
  try {
    const cartItems = await Keranjangs.findAll();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { title, pricedescription, itemId, quantity } = req.body;
    const existingItem = await Keranjangs.findOne({ where: { itemId } });

    if (existingItem) {
      existingItem.quantity += quantity || 1;
      await existingItem.save();
      return res.json(existingItem);
    }

    const newItem = await Keranjangs.create({ title, pricedescription, itemId, quantity });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;
    const item = await Keranjangs.findOne({ where: { itemId } });

    if (!item) return res.status(404).json({ error: "Item not found" });

    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const deleted = await Keranjangs.destroy({ where: { itemId } });
    if (!deleted) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    await Keranjangs.destroy({ where: {} });
    res.json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getCartItems,
  addToCart,
  updateCartItem,
  deleteCartItem,
  clearCart,
};