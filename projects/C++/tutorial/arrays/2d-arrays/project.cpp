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
    char keyboard[4][10] = {
        {'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'},
        {'Q', 'U', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'},
        {'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'},
        {'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'}};

    for (int row = 0; row < 4; row++)
    {
        for (int column = 0; column < 10; column++)
        {
            cout << keyboard[row][column] << " ";
        }
        cout << endl;
    }
}