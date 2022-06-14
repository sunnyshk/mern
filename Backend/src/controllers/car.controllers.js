const express = require("express");

const Cars = require("../models/cars.models");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 10;
    const skip = (page - 1) * pagesize;
    const filterkey = req.query.filterkey;
    const filtervalue = req.query.filtervalue;
    const sortkey = req.query.sort;
    const sortvalue = req.query.sortvalue;

    let cars = await Cars.find({ [filterkey]: filtervalue })
      .skip(skip)
      .limit(pagesize)
      .sort({ [sortkey]: sortvalue })
      .lean()
      .exec();

    let pagination = Math.ceil(
      (await Cars.find({ [filterkey]: filtervalue }).countDocuments()) /
        pagesize
    );

    return res.status(200).send({ cars: cars, totalpage: pagination });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
