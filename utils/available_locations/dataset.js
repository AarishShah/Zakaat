const getIndian_Gold_Cities = require('../gold/gold-1');
const Indian_Gold_Cities = JSON.parse(getIndian_Gold_Cities());
console.log(Indian_Gold_Cities[104]);

const getGold_Countries = require('../gold/gold-2');
const Gold_Countries = JSON.parse(getGold_Countries());
console.log(Gold_Countries[32]);

const getIndian_Silver_Cities = require('../silver/silver-1')
const Indian_Silver_Cities = JSON.parse(getIndian_Silver_Cities());
console.log(Indian_Silver_Cities[104]);

const getSilver_Countries = require('../silver/silver-2'); // @KhushbooHamid review this line
const Silver_Countries = JSON.parse(getSilver_Countries());
console.log(Silver_Countries[56]);
