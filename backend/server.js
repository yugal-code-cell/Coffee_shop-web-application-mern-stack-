require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Table = require("./models/Table");

const app = express();

app.use(cors());

app.use(express.json());


// DATABASE

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "MongoDB Connected"
    );
  })
  .catch((err) => {
    console.log(err);
  });


// CREATE DEFAULT TABLES

const createTables = async () => {
  const count =
    await Table.countDocuments();

  if (count === 0) {
    const tables = [];

    for (let i = 1; i <= 10; i++) {
      tables.push({
        tableNumber: i,
      });
    }

    await Table.insertMany(
      tables
    );

    console.log(
      "10 Tables Created"
    );
  }
};

createTables();


// ROUTES

app.use(
  "/api/tables",
  require("./routes/tableRoutes")
);


// TEST ROUTE

app.get("/", (req, res) => {
  res.send(
    "Coffee Shop Backend Running"
  );
});


// SERVER

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});