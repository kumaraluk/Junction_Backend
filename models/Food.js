import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, default: "Bihari" },     // e.g., Litti-Chokha, Sweets, Non-veg, etc.
  description: { type: String },
  price: { type: Number, required: true },
  veg: { type: Boolean, default: true },
  rating: { type: Number, default: 4.5 },            // 1–5
  image: { type: String },                            // URL or local asset path
  spiceLevel: { type: Number, default: 2 },           // 0–5
}, { timestamps: true });

export default mongoose.model("Food", foodSchema);
