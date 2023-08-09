const getIndian_Silver_Cities = require('../silver/silver-1')
const Indian_Silver_Cities = JSON.parse(getIndian_Silver_Cities());
console.log(Indian_Silver_Cities[104]);

const getSilver_Countries = require('../silver/silver-2'); // @KhushbooHamid review this line
const Silver_Countries = JSON.parse(getSilver_Countries());
console.log(Silver_Countries[56]);