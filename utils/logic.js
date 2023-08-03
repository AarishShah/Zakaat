// Function to calculate Zakat
function calculateZakat(gold, silver, otherAssets, savings, liabilities, country)
{
    // Zakat Nisab value for gold and silver (in grams)
    const nisabGold = 85.0;
    const nisabSilver = 595.0;

    // Zakat rate (2.5%)
    const zakatRate = 0.025;

    // Map to store current market prices of gold and silver for different countries (currency per gram)
    const goldPricesPerGram = {
        india: 4500.0, // Replace with the actual price of gold for India
        usa: 40.0,     // Replace with the actual price of gold for USA
        // Add more countries and corresponding prices as needed
    };

    const silverPricesPerGram = {
        india: 70.0, // Replace with the actual price of silver for India
        usa: 0.8,   // Replace with the actual price of silver for USA
        // Add more countries and corresponding prices as needed
    };

    // Check if the country is supported and get the corresponding market prices
    const goldPricePerGram = goldPricesPerGram[country];
    const silverPricePerGram = silverPricesPerGram[country];

    if (!goldPricePerGram || !silverPricePerGram) //data set
    {
        console.log("Sorry, Zakat calculation is not supported for your country at the moment.");
        return;
    }

    // Calculate total assets (including savings)
    const totalAssets = gold + silver + otherAssets + savings;

    // Deduct liabilities from total assets
    const netAssets = totalAssets - liabilities;

    // Calculate Zakat on gold and silver separately (in grams)
    let zakatOnGoldGrams = 0.0;
    let zakatOnSilverGrams = 0.0;

    if (gold >= nisabGold)
    {
        zakatOnGoldGrams = gold * zakatRate;
    }

    if (silver >= nisabSilver)
    {
        zakatOnSilverGrams = silver * zakatRate;
    }

    // Convert Zakat from grams to the respective country's currency using the market prices
    const zakatOnGoldCurrency = zakatOnGoldGrams * goldPricePerGram;
    const zakatOnSilverCurrency = zakatOnSilverGrams * silverPricePerGram;

    // Calculate Zakat on savings (2.5% of the total savings)
    const zakatOnSavingsCurrency = savings * 0.025;

    // Calculate total Zakat in the respective country's currency (after deducting liabilities)
    const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;

    if (totalZakatCurrency > 0.0)
    {
        console.log(`You must pay Zakat: ${totalZakatCurrency} ${country}`);
    } else
    {
        console.log("You don't have to pay Zakat");
    }
}

// Example usage
calculateZakat(100, 500, 2000, 3000, 500, "india");

// get data frm g1, g2, s1,s2
// currency
// data set se data collect krna