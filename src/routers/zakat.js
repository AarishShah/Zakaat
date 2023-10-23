const express = require('express');
const Calculator = require('../models/zakat'); // Adjust the path according to your project structure
const auth = require('../middleware/auth'); // Adjust the path according to your project structure
const { calculateZakat } = require('../utils/zakat-calculator/zakat-calculator');
const router = new express.Router();

// Save a new calculation

router.post('/calculateZakat', auth, async (req, res) =>
{
    try
    {
        // Calculate Zakat using the imported function
        const zakatValue = await calculateZakat(
            req.body.savingsLocation,
            req.body.locationForGold,
            req.body.locationForSilver,
            req.body.purity,
            req.body.weightOfGold,
            req.body.weightOfSilver,
            req.body.savings
        );

        // Display the result in the terminal
        console.log(`Zakat for user ${req.user.name}: ${zakatValue}`);

        // Send a response back to the user
        res.send({ zakatValue });
    } catch (error)
    {
        console.error('Error calculating Zakat:', error);
        res.status(500).send();
    }
});

module.exports = router;
