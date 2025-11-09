import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, default: "Bihari" },    
  description: { type: String },
  price: { type: Number, required: true },
  veg: { type: Boolean, default: true },
  rating: { type: Number, default: 4.5 },            
  image: { type: String },                            
  spiceLevel: { type: Number, default: 2 },           
}, { timestamps: true });

export default mongoose.model("Food", foodSchema);
