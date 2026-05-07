const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Cafe = require("./models/Cafe");
const Visit = require("./models/Visit");

dotenv.config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    //CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION  FULL DATA WIPE --> WILL DELETE ALL EXISTING DATABSE DATA CAUTION CAUTION CAUTION CAUTION 
    await Cafe.deleteMany();
    await Visit.deleteMany();
    console.log("CLEARED");
    //CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION 




    //10 basic samples for da testing
    const cafes = await Cafe.insertMany([
      {
        name: "Blueprint Coffee",
        location: "St. Louis, MO",
      },
      {
        name: "Comet Coffee",
        location: "Ann Arbor, MI",
      },
      {
        name: "Redbud Coffee",
        location: "Oklahoma City, OK",
      },
    ]);

    console.log("Cafes seeded");

    //fleshed out detailed visit data for testing purposes (includes variation in da drinks people are ordering and such)
    await Visit.insertMany([
      {
        date: new Date("2025-01-10"),
        cafeId: cafes[0]._id,
        drinkName: "Oat Milk Latte",
        drinkPrice: 6.5,
        drinkRating: 9,
        ambiance: "Cozy, good lighting, not too loud",
        productivityLevel: 8,
        notes: "Finished my entire project outline here",
      },
      {
        date: new Date("2025-01-15"),
        cafeId: cafes[0]._id,
        drinkName: "Cold Brew",
        drinkPrice: 5.0,
        drinkRating: 7,
        ambiance: "A little crowded but still good vibes",
        productivityLevel: 6,
        notes: "Got distracted but still knocked out some readings",
      },
      {
        date: new Date("2025-01-20"),
        cafeId: cafes[1]._id,
        drinkName: "Cortado",
        drinkPrice: 5.5,
        drinkRating: 10,
        ambiance: "Perfect. Quiet, warm, great music",
        productivityLevel: 10,
        notes: "Best study session of the semester",
      },
      {
        date: new Date("2025-02-01"),
        cafeId: cafes[1]._id,
        drinkName: "Matcha Latte",
        drinkPrice: 7.0,
        drinkRating: 8,
        ambiance: "Busy but manageable",
        productivityLevel: 7,
        notes: "Worked on group project slides",
      },
      {
        date: new Date("2025-02-10"),
        cafeId: cafes[2]._id,
        drinkName: "Cappuccino",
        drinkPrice: 5.0,
        drinkRating: 9,
        ambiance: "Chill neighborhood spot, very low key",
        productivityLevel: 9,
        notes: "Hammered out two assignments back to back",
      },
      {
        date: new Date("2025-02-14"),
        cafeId: cafes[2]._id,
        drinkName: "Vanilla Latte",
        drinkPrice: 6.0,
        drinkRating: 6,
        ambiance: "Packed because of holiday, too noisy",
        productivityLevel: 3,
        notes: "Could barely focus, won't come on a holiday again",
      },
      {
        date: new Date("2025-02-20"),
        cafeId: cafes[0]._id,
        drinkName: "Espresso",
        drinkPrice: 3.5,
        drinkRating: 10,
        ambiance: "Empty morning crowd, felt like a private cafe",
        productivityLevel: 10,
        notes: "Knocked out my entire essay draft",
      },
      {
        date: new Date("2025-03-05"),
        cafeId: cafes[1]._id,
        drinkName: "Iced Americano",
        drinkPrice: 4.5,
        drinkRating: 8,
        ambiance: "Good energy, students everywhere",
        productivityLevel: 7,
        notes: "Studied for midterms",
      },
      {
        date: new Date("2025-03-12"),
        cafeId: cafes[2]._id,
        drinkName: "Chai Latte",
        drinkPrice: 6.5,
        drinkRating: 9,
        ambiance: "Rainy day, super cozy atmosphere",
        productivityLevel: 8,
        notes: "Read an entire book chapter and took notes",
      },
      {
        date: new Date("2025-03-20"),
        cafeId: cafes[0]._id,
        drinkName: "Honey Oat Latte",
        drinkPrice: 7.0,
        drinkRating: 10,
        ambiance: "Perfect as always",
        productivityLevel: 9,
        notes: "Finished final project research",
      },
    ]);

    console.log("Visits seeded");
    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDB();