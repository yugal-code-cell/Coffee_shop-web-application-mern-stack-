const express = require("express");
const router = express.Router();

const Table = require("../models/Table");


// GET ALL TABLES

router.get("/all", async (req, res) => {
  try {
    const tables = await Table.find();

    res.json(tables);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// AVAILABLE TABLE COUNT

router.get(
  "/available-count",
  async (req, res) => {
    try {
      const count =
        await Table.countDocuments({
          isBooked: false,
        });

      res.json({
        available: count,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);


// BOOK TABLE

router.post("/book", async (req, res) => {
  try {
    const { name } = req.body;

    const table =
      await Table.findOne({
        isBooked: false,
      });

    if (!table) {
      return res.status(400).json({
        message:
          "No Tables Available",
      });
    }

    table.isBooked = true;

    table.customerName = name;

    await table.save();

    res.json(table);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// FREE TABLE

router.put(
  "/free/:id",
  async (req, res) => {
    try {
      await Table.findByIdAndUpdate(
        req.params.id,
        {
          isBooked: false,
          customerName: "",
        }
      );

      res.json({
        message:
          "Table Released",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;