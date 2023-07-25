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
#include <iostream>
using namespace std;

int main()
{
    float minCOG = 87.0;  // min cost of gold - to be collected from api
    float minCOS = 200.0; // min cost of silver - to be collected from api

    float gold = 450.0;   // user input
    float silver = 750.0; // user input
    float savings = 0;

    float g = (gold - minCOG) * 0.025;
    float s = (silver - minCOS) * 0.025;
    savings = savings / 40;
    float liabilities = 0.0;
    float zakat = g + s + savings - liabilities;

    if (gold >= minCOG)
    {
        cout << "You must pay Zakat " << zakat << endl;
    }
    else
    {
        cout << "You don't have to pay Zakat" << endl;
    }
}