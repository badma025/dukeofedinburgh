#include <bits/stdc++.h>
#include <iostream>
#include <stdlib.h>
#include <cmath>
#include <string>

using namespace std;

int main()
{
    string x, y;
    int difference;
    cin >> x;
    cin >> y;

    // convert both words to lowercase
    transform(x.begin(), x.end(), x.begin(), ::toupper);
    transform(y.begin(), y.end(), y.begin(), ::toupper);

    // map over both words to check for differences
    for (int i = 0; i < x.length(); i++)
    {
        if (x.at(i) != y.at(i))
        {
            // th
            if ((int)x.at(i) < (int)y.at(i))
            {

                difference--;
            }
            else
            {
                difference++;
            }
        }
    }

    cout << difference;
}