#include <iostream>
using namespace std;

int main()
{
    int minCOG = 87; // min cost of gold - to be collected from api
    int minCOS = 200; // min cost of silver - to be collected from api

        int cog = 450; // user input
        int cos = 750; // user input
        int otherAssets = 0; // user input

    int totalAssets = cog + cos + otherAssets;

    if (totalAssets >= minCOG || totalAssets >= minCOS)
    {
        cout << "You must pay Zakat" << endl;
    }
    else
    {
        cout << "You don't have to pay Zakat" << endl;
    }
}