const express = require('express');
const Calculator = require('../models/zakat'); // Adjust the path according to your project structure
const auth = require('../middleware/auth'); // Adjust the path according to your project structure
const zakatCalculator = require('../utils/zakal-calculator/zakat-calculator');
const router = new express.Router();

// Save a new calculation

router.post('/calculateZakat', auth, async (req, res) =>
{
    try
    {
        // map this to zakatCalculator
        // Extract data from the request body
        const { income, savings } = req.body;

        // Calculate Zakat using the imported function
        const zakatValue = zakatCalculator(income, savings);

        // Display the result in the terminal
        console.log(`Zakat for user ${req.user.name}: ${zakatValue}`);

        // Send a response back to the user (optional)
        res.send({ zakatValue });
    } catch (error)
    {
        console.error('Error calculating Zakat:', error);
        res.status(500).send();
    }
});

router.post('/calculator/save',auth, async (req, res) =>
{
    const calculator = new Calculator({
        ...req.body,
        userId: req.user._id
    });

    try
    {
        await calculator.save();
        res.status(201).send(calculator);
    } catch (e)
    {
        res.status(400).send(e);
    }
});

// Get all calculations for the logged-in user
router.get('/calculator/history',  async (req, res) =>
{
    try
    {
        await req.user.populate('calculations').execPopulate();
        res.send(req.user.calculations);
    } catch (e)
    {
        res.status(500).send();
    }
});

module.exports = router;
