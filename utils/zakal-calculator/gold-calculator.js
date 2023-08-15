const { isCitySupportedGold, isCountrySupportedGold } = require('../available_locations/gold/is-available.js');
const IndianGoldCities = require('../metal_rates/gold/json-data/indian-cities-data.json');
const GoldCountries = require('../metal_rates/gold/json-data/world-data.json');


function costOfGold(location, purity, weight)
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

            IndianGoldCities.find(element =>
            {
                if (element.city.toLowerCase() === location)
                {
                    rate22K = element.rate22K;
                    rate24K = element.rate24K;
                }
            });

            return purity === 22 ? rate22K : rate24K;

        } else
        {
            let rate18K;
            let rate22K;
            let rate24K;

            GoldCountries.find(element =>
            {
                if (element.country.toLowerCase() === location)
                {
                    rate18K = element.rate18K;
                    rate22K = element.rate22K;
                    rate24K = element.rate24K;
                }
            });

            return purity === 18 ? rate18K : (purity === 22 ? rate22K : rate24K);
        }

    }

    // Check if location is supported
    if (!isCitySupportedGold(location) && !isCountrySupportedGold(location))
    {
        throw new Error('Unsupported location');
    }

    // Check if purity is supported based on location
    if (isCitySupportedGold(location) && (purity !== 22 && purity !== 24))
    {
        throw new Error('Unsupported purity for city. Supported values are 22 and 24.');
    } else if (isCitySupportedGold(location) && (purity !== 18 && purity !== 22 && purity !== 24))
    {
        throw new Error('Unsupported purity for country. Supported values are 18, 22, and 24.');
    }

    // Calculate the cost of gold
    const cost = weight * price(location, purity);
    return cost;
}

module.exports = costOfGold;