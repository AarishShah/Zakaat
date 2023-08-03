const path = require('path');
const express = require('express');
const hbs = require('hbs');
const goldScraper = require('./utils/Gold/Gold-1.js');
const goldScraper2 = require('./utils/Gold/Gold-2.js'); // Correct path to Gold-2.js
const silverScraper1 = require('./utils/Silver/silver-1'); // Correct path to silver-1.js
const silverScraper2 = require('./utils/Silver/silver-2');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

// Set the view engine and views directory
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views')); // Assuming your views folder is in the root directory

// Set up static files
app.use(express.static(publicDirectoryPath));

const location1 = 'united-states'; // user will enter 'united states' or any other location
const location2 = 'ahmedabad'; // Replace with any other location
const location3 = 'nepal'; // Replace with any other location
const location4 = 'in-india'; // Replace with any other location

// Get gold rates for location1
goldScraper1.getGoldRates(location1)
  .then(function (goldRates) {
    console.log('Gold Rates for', location1);
    console.log(goldRates);
  })
  .catch(function (error) {
    console.error('Error fetching gold rates for', location1, error);
  });

// Get silver rates for location2
silverScraper1.getSilverRates(location2)
  .then(function (silverRates) {
    console.log('Silver Rates for', location2);
    console.log(silverRates);
  })
  .catch(function (error) {
    console.error('Error fetching silver rates for', location2, error);
  });

// Get silver rates for location3
silverScraper2.getSilverRates(location3)
  .then(function (silverRates) {
    console.log('Silver Rates for', location3);
    console.log(silverRates);
  })
  .catch(function (error) {
    console.error('Error fetching silver rates for', location3, error);
  });

// Get gold rates for location4
goldScraper2.getGoldRates(location4)
  .then(function (goldRates) {
    console.log('Gold Rates for', location4);
    console.log(goldRates);
  })
  .catch(function (error) {
    console.error('Error fetching gold rates for', location4, error);
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is up and running on http://localhost:3000');
});
