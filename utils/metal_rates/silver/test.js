const fetchSilverData = require('./gtest');

async function displaySilverData(location)
{
    try
    {
        const result = await fetchSilverData(location);
        console.log(result);
    }
    catch (error)
    {
        console.error("Error:", error);
    }
}

displaySilverData("nepal");
