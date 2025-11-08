import Order from "../models/order.js";

export const placeOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Order failed", error: err.message });
  }
};



export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err.message });
  }
};
export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [
        { "user.id": req.params.userId },   // ✅ match id
        { "user._id": req.params.userId }   // ✅ fallback (old data)
      ]
    }).sort({ createdAt: -1 });

    console.log(`📦 Orders found for user: ${req.params.userId} → ${orders.length}`);

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





