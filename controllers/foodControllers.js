import Food from "../models/Food.js";

// GET /api/food  (protected)
export const getFoods = async (req, res) => {
  try {
    const items = await Food.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// (optional) POST /api/food/seed — seed a few Bihar dishes
export const seedFoods = async (req, res) => {
  try {
    const sample = [
      {
        name: "Litti Chokha",
        category: "Staple",
        description: "Wheat balls stuffed with sattu, served with smoky chokha.",
        price: 120,
        veg: true,
        rating: 4.8,
        spiceLevel: 2,
        image: "http://localhost:5000/images/litti.png" // placeholder
      },
      {
        name: "Dal Pitha",
        category: "Snack",
        description: "Steamed rice dumplings stuffed with spiced lentils.",
        price: 90,
        veg: true,
        rating: 4.6,
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947"
      },
      {
        name: "Mutton Ahuna",
        category: "Non-veg",
        description: "Slow-cooked mutton in earthen pot with rustic spices.",
        price: 280,
        veg: false,
        rating: 4.7,
        spiceLevel: 4,
        image: "http://localhost:5000/images/Ahun.png"
      },
      {
        name: "Khaja",
        category: "Sweet",
        description: "Crisp layered sweet from Silao tradition.",
        price: 60,
        veg: true,
        rating: 4.5,
        spiceLevel: 0,
        image: "http://localhost:5000/images/khaja.png"
      },
       {
        name: "Sattu Paratha",
        category: "veg",
        description: "A healthy and flavorful Indian stuffed flatbread.",
        price: 50,
        veg: true,
        rating: 4.7,
        spiceLevel: 4,
        image: "http://localhost:5000/images/sattu.png"
      },
      {
        name: "Thekua",
        category: "veg",
        description: "A healthy and flavorful Indian stuffed flatbread.",
        price: 80,
        veg: true,
        rating: 4.7,
        spiceLevel: 0,
        image: "http://localhost:5000/images/thekua.png"
      },
      {
        name: "Gugni",
        category: "veg",
        description: "A healthy and flavorful Indian stuffed flatbread.",
        price: 99,
        veg: true,
        rating: 4.7,
        spiceLevel: 4,
        image: "http://localhost:5000/images/ghugni.png"
      },
      {
        name: "Kadhi Bari",
        category: "veg",
        description: "A healthy and flavorful Indian stuffed flatbread.",
        price: 120,
        veg: true,
        rating: 4.7,
        spiceLevel: 4.8,
        image: "http://localhost:5000/images/bari.png"
      },
       {
        name: "Chicken Handi",
        category: "Non-veg",
        description: "Slow-cooked chicken in earthen pot with rustic spices.",
        price: 120,
        veg: false,
        rating: 4.7,
        spiceLevel: 4.8,
        image: "http://localhost:5000/images/Chicken-Handi.jpg"
      },
    ];
    await Food.deleteMany({});
    const created = await Food.insertMany(sample);
    res.json({ message: "Seeded", count: created.length });
  } catch (err) {
    res.status(500).json({ message: "Seeding failed", error: err.message });
  }
};
