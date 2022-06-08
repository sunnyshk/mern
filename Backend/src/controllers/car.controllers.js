const express = require("express");

const Cars = require("../models/cars.models");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    let page = req.query.page || 1;
    let pagesize = req.query.pagesize || 10;
    let filter = req.query.filter;
    let sort = req.query.sort;
    const skip = (page - 1) * pagesize;
  } catch (error) {}
});
