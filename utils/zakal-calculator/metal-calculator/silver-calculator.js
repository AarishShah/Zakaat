const { isCitySupportedSilver, isCountrySupportedSilver } = require('../../available_locations/silver/is-available.js');
const IndianSilverCities = require('../../metal_rates/silver/json-data/indian-cities-data.json');
const SilverCountries = require('../../metal_rates/silver/json-data/world-data.json');

function silverCalculator(location, weight)
{
    location = location.toLowerCase();

    function price(location)
    {
        if (isCitySupportedSilver(location))
        {
            let rate;
            let currency = 'inr';

            IndianSilverCities.find(element =>
            {
                if (element.city.toLowerCase() === location)
                {
                    rate = element.rate;
                }
            });

            return { rate, currency };

        } else
        {
            let rate;
            let currency;

            SilverCountries.find(element =>
            {
                if (element.country.toLowerCase() === location)
                {
                    rate = element.rate;
                    currency = element.currency.trim().toLowerCase();
                }
            });

            return { rate, currency };
        }

    }

    // Check if location is supported
    if (!isCitySupportedSilver(location) && !isCountrySupportedSilver(location))
    {
        console.error('Cannot calculate the silver rate for this location');
        return { cost: 0, currency: null };
    }

    // Calculate the cost of gold
    const { rate, currency } = price(location);
    const cost = weight * rate;
    return { cost, currency };
}
// Example:
// const result = silverCalculator('mumbai', 1000);
// console.log(`The silver price is ${result.cost} ${result.currency}`);

module.exports = silverCalculator;
