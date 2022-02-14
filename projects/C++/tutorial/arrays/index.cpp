#include <iostream>
#include <string>
#include <algorithm> 
#include <cmath>
#include <cstdlib> // random
#include <time.h>  // time
#include <array>
using namespace std;

int main()
{
    string cars[] = {"Corvette", "Ford", "Ferrari", "Audi"};
    int len = sizeof(cars) / sizeof(cars[0]);
    int years[] = {2020, 2021, 2022};

    for (int i = 0; i < len; i++)
    {
        cout << cars[i] << endl;
    }
    
}