import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      id: String,
      name: String,
      email: String,
    },
    cartItems: [
      {
        _id: String,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      }
    ],
    totalAmount: Number,
    deliveryAddress: String,
    locationCoordinates: {
      latitude: Number,
      longitude: Number,
    },
    status: {
      type: String,
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
