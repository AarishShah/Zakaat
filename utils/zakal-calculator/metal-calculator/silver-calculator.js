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

            IndianSilverCities.find(element =>
            {
                if (element.city.toLowerCase() === location)
                {
                    rate = element.rate;
                }
            });

            return rate;

        } else
        {
            let rate;

            SilverCountries.find(element =>
            {
                if (element.country.toLowerCase() === location)
                {
                    rate = element.rate;
                }
            });

            return rate;
        }

    }

    // Check if location is supported
    if (!isCitySupportedSilver(location) && !isCountrySupportedSilver(location))
    {
        console.error('Cannot calculate the silver rate for this location');
        return 0;
    }

    // Calculate the cost of gold
    const cost = weight * price(location);
    return cost;
}
// silverCalculator('mumbai', 1000);

module.exports = silverCalculator;
