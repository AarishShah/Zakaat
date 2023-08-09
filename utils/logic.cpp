// #include <iostream>
// using namespace std;

// int main()
// {
//     int minCOG = 87; // min cost of gold - to be collected from api
//     int minCOS = 200; // min cost of silver - to be collected from api

//         int cog = 450; // user input
//         int cos = 750; // user input
//         int otherAssets = 0; // user input

//     int totalAssets = cog + cos + otherAssets;

//     if (totalAssets >= minCOG || totalAssets >= minCOS)
//     {
//         cout << "You must pay Zakat" << endl;
//     }
//     else
//     {
//         cout << "You don't have to pay Zakat" << endl;
//     }
// }

// code by khushboo improved version
// #include <iostream>
// using namespace std;

// int main()
// {
//     float minCOG = 87.0;  // min cost of gold - to be collected from api
//     float minCOS = 200.0; // min cost of silver - to be collected from api

//     float gold = 450.0;   // user input
//     float silver = 750.0; // user input
//     float savings = 0;

//     float zakatongold = gold * 0.025;
//     float zakatonsilver = silver * 0.025;
//     savings = savings / 40;
//     float liabilities = 0.0;
//     float zakat = zakatongold + zakatonsilver + savings - liabilities;

//     if (gold >= minCOG)
//     {
//         cout << "You must pay Zakat " << zakat << endl;
//     }
//     else
//     {
//         cout << "You don't have to pay Zakat" << endl;
//     }
// }


// #include <iostream>
// using namespace std;

// int main()
// {
//    // float minCOG = 87.0;  // min cost of gold - to be collected from api
//  //   float minCOS = 200.0; // min cost of silver - to be collected from api

//     // User inputs for gold, silver, other assets, and liabilities (in grams)
//     float gold, silver, otherAssets, liabilities;
//     cout << "Enter the amount of gold (in grams): ";
//     cin >> gold;
//     cout << "Enter the amount of silver (in grams): ";
//     cin >> silver;
//     cout << "Enter the value of other eligible assets (if any): ";
//     cin >> otherAssets;
//     cout << "Enter the total liabilities (if any): ";
//     cin >> liabilities;

//     // Current market price of gold and silver (in INR per gram)
//     float goldPricePerGram = 5500.0;   // Replace with the actual price of gold
//     float silverPricePerGram = 70.0;   // Replace with the actual price of silver

//     // Zakat Nisab value for gold and silver (in grams)
//     const float nisabGold = 85.0;
//     const float nisabSilver = 595.0;

//     // Zakat rate (2.5%)
//     const float zakatRate = 0.025;

//     // Calculate total assets
//     float totalAssets = gold + silver + otherAssets;

//     // Deduct liabilities from total assets
//     float netAssets = totalAssets - liabilities;

//     // Calculate Zakat on gold and silver separately (in grams)
//     float zakatOnGoldGrams = 0.0;
//     float zakatOnSilverGrams = 0.0;

//     if (gold >= nisabGold) {
//         zakatOnGoldGrams = gold * zakatRate;
//     }

//     if (silver >= nisabSilver) {
//         zakatOnSilverGrams = silver * zakatRate;
//     }

//     // Convert Zakat from grams to INR using the market prices
//     float zakatOnGoldINR = zakatOnGoldGrams * goldPricePerGram;
//     float zakatOnSilverINR = zakatOnSilverGrams * silverPricePerGram;

//     // Calculate total Zakat in INR (after deducting liabilities)
//     float totalZakatINR = zakatOnGoldINR + zakatOnSilverINR;

//     if (totalZakatINR > 0.0)
//     {
//         cout << "You must pay Zakat: " << totalZakatINR << " INR" << endl;
//     }
//     else
//     {
//         cout << "You don't have to pay Zakat" << endl;
//     }

//     return 0;
// }


#include <iostream>
#include <map>
using namespace std;

int main()
{
    // float minCOG = 87.0;  // min cost of gold - to be collected from api
    // float minCOS = 200.0; // min cost of silver - to be collected from api

    // User inputs for gold, silver, other assets, savings, and liabilities (in grams)
    float gold, silver, otherAssets, savings, liabilities;
    cout << "Enter the amount of gold (in grams): ";
    cin >> gold;
    cout << "Enter the amount of silver (in grams): ";
    cin >> silver;
    cout << "Enter the value of other eligible assets (if any): ";
    cin >> otherAssets;
    cout << "Enter the amount of savings: ";
    cin >> savings;
    cout << "Enter the total liabilities (if any): ";
    cin >> liabilities;

    // Zakat Nisab value for gold and silver (in grams)
    const float nisabGold = 85.0;
    const float nisabSilver = 595.0;

    // Zakat rate (2.5%)
    const float zakatRate = 0.025;

    // Map to store current market prices of gold and silver for different countries (INR per gram)
    map<string, float> goldPricesPerGram = {
        {"india", 4500.0},   // Replace with the actual price of gold for India
        {"usa", 40.0},       // Replace with the actual price of gold for USA
        // Add more countries and corresponding prices as needed
    };

    map<string, float> silverPricesPerGram = {
        {"india", 70.0},     // Replace with the actual price of silver for India
        {"usa", 0.8},        // Replace with the actual price of silver for USA
        // Add more countries and corresponding prices as needed
    };

    string country;
    cout << "Enter your country (lowercase): ";
    cin >> country;

    // Check if the country is supported and get the corresponding market prices
    float goldPricePerGram = 0.0;
    float silverPricePerGram = 0.0;

    if (goldPricesPerGram.find(country) != goldPricesPerGram.end()) {
        goldPricePerGram = goldPricesPerGram[country];
    } else {
        cout << "Sorry, Zakat calculation is not supported for your country at the moment." << endl;
        return 0;
    }

    if (silverPricesPerGram.find(country) != silverPricesPerGram.end()) {
        silverPricePerGram = silverPricesPerGram[country];
    } else {
        cout << "Sorry, Zakat calculation is not supported for your country at the moment." << endl;
        return 0;
    }

    // Calculate total assets (including savings)
    float totalAssets = gold + silver + otherAssets + savings;

    // Deduct liabilities from total assets
    float netAssets = totalAssets - liabilities;

    // Calculate Zakat on gold and silver separately (in grams)
    float zakatOnGoldGrams = 0.0;
    float zakatOnSilverGrams = 0.0;

    if (gold >= nisabGold) {
        zakatOnGoldGrams = gold * zakatRate;
    }

    if (silver >= nisabSilver) {
        zakatOnSilverGrams = silver * zakatRate;
    }

    // Convert Zakat from grams to the respective country's currency using the market prices
    float zakatOnGoldCurrency = zakatOnGoldGrams * goldPricePerGram;
    float zakatOnSilverCurrency = zakatOnSilverGrams * silverPricePerGram;

    // Calculate Zakat on savings (2.5% of the total savings)
    float zakatOnSavingsCurrency = savings * 0.025;

    // Calculate total Zakat in the respective country's currency (after deducting liabilities)
    float totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;

    if (totalZakatCurrency > 0.0)
    {
        cout << "You must pay Zakat: " << totalZakatCurrency << " " << country << endl;
    }
    else
    {
        cout << "You don't have to pay Zakat" << endl;
    }

    return 0;
}
