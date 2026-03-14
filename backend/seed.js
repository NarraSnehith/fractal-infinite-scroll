const mongoose = require("mongoose");
const Activity = require("./models/Activity");

mongoose.connect("mongodb://127.0.0.1:27017/fractalFeed");

async function seedDatabase() {

  await Activity.deleteMany();

  const data = [];

  for (let i = 1; i <= 50; i++) {
    data.push({
      title: "Activity " + i,
      description: "This is activity number " + i
    });
  }

  await Activity.insertMany(data);

  console.log("Database Seeded");

  process.exit();
}

seedDatabase();