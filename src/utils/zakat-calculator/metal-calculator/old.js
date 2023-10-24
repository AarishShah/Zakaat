const { isCitySupportedGold, isCountrySupportedGold } = require('../../available_locations/gold/is-available.js');
const IndianGoldCities = require('../../metal_rates/gold/json-data/indian-cities-data.json');
const GoldCountries = require('../../metal_rates/gold/json-data/world-data.json');


function goldCalculator(location, purity, weight)
{
    location = location.toLowerCase();

    // Define the price function for gold based on location and purity
    function price(location, purity)
    {
        // Define a sample price map for gold based on location and purity

        if (isCitySupportedGold(location))
        {
            let rate22K;
            let rate24K;
            let currency = 'inr';

            IndianGoldCities.find(element =>
            {
                if (element.city.toLowerCase() === location)
                {
                    rate22K = element.rate22K;
                    rate24K = element.rate24K;
                }
            });

            const rate = purity === 22 ? rate22K : rate24K;
            return { rate, currency };


        } else
        {
            let rate18K;
            let rate22K;
            let rate24K;
            let currency;

            GoldCountries.find(element =>
            {
                if (element.country.toLowerCase() === location)
                {
                    rate18K = element.rate18K;
                    rate22K = element.rate22K;
                    rate24K = element.rate24K;
                    currency = element.currency.trim().toLowerCase();
                }
            });

            const rate = purity === 18 ? rate18K : (purity === 22 ? rate22K : rate24K);
            return { rate, currency };
        }

    }

    // Check if location is supported
    if (!isCitySupportedGold(location) && !isCountrySupportedGold(location))
    {
        console.error('Cannot calculate the gold rate for this location');
        return { cost: 0, currency: 'usd' };
    }

    // Check if purity is supported based on location
    if (isCitySupportedGold(location) && (purity !== 22 && purity !== 24))
    {
        console.error('Unsupported purity for city. Supported values are 22 and 24.');
        return { cost: 0, currency: 'usd' };
    } else if (isCitySupportedGold(location) && (purity !== 18 && purity !== 22 && purity !== 24))
    {
        console.error('Unsupported purity for country. Supported values are 18, 22, and 24.');
        return { cost: 0, currency: 'usd' };
    }

    // Calculate the cost of gold
    const { rate, currency } = price(location, purity);
    const cost = weight * rate;
    return { cost, currency };

}
// Example:
// const result = goldCalculator('mumbai', 22, 1000);
// console.log(`The gold price is ${result.cost} ${result.currency}`);

module.exports = goldCalculator;