const { isCitySupportedGold, isCountrySupportedGold } = require('../available_locations/gold/is-available.js');
const IndianGoldCities = require('../metal_rates/gold/json-data/indian-cities-data.json');
// console.log(IndianGoldCities[0].city);

function gold(location, purity, weight)
{
    location = location.toLowerCase();
    // Define the price function for gold based on location and purity
    function price(location, purity)
    {
        // Define a sample price map for gold based on location and purity

        IndianGoldCities.forEach(element => 
            {
                if (element.city === location)
                {
                    console.log(element.city);
                }
            }
            )



        // const priceMap = {
        //     'city': {
        //         22: 4500, // price per gram for 22k gold in city
        //         24: 5000  // price per gram for 24k gold in city
        //     },
        //     'country': {
        //         18: 4000, // price per gram for 18k gold in country
        //         22: 4200, // price per gram for 22k gold in country
        //         24: 4800  // price per gram for 24k gold in country
        //     }
        // };
        // console.log(priceMap[location][purity]);
        // return priceMap[location][purity];
    }

    // console.log(isCitySupportedGold(location)); // Expected output: true
    // console.log(isCountrySupportedGold(location)); // Expected output: false
    // Check if location is supported
    if (!isCitySupportedGold(location) && !isCitySupportedGold(location))
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

// Sample usage:
console.log(gold('CHENNAI', 22, 10)); // Expected output: 45000
// console.log(gold('Yemen', 18, 10)); // Expected output: 40000

