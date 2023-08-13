const getIndian_Gold_Cities = require('../gold/city-list');
const Indian_Gold_Cities = JSON.parse(getIndian_Gold_Cities());
console.log(Indian_Gold_Cities[104]);

const getGold_Countries = require('../gold/country-list');
const Gold_Countries = JSON.parse(getGold_Countries());
console.log(Gold_Countries[32]);

