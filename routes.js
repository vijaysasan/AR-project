const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

router.get('/', async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});

router.post('/add', async (req, res) => {
    const { name, location, price, modelUrl } = req.body;
    const newProperty = new Property({ name, location, price, modelUrl });
    await newProperty.save();
    res.json({ message: "Property Added" });
});

module.exports = router;
