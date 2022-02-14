#include <bits/stdc++.h>
#include <iostream>
#include <stdlib.h>
#include <cmath>
#include <string>

using namespace std;

int main()
{
    string x, y;
    cin >> x;
    cin >> y;

    // map over both words to check for differences

    // convert both words to lowercase
    for (int i = 0; i < x.size(); i++)
    {
        x[i] = towlower(x[i]);
        y[i] = towlower(y[i]);
    }
    // comparing the strings
    // if they are equal
    if (x == y)
    {
        cout << "0";
    }
    else
    {
        for (int i = 0; i < x.size(); i++)
        {

            if (x[i] < y[i])
            {
                cout << "-1" << endl;
                break;
            }
            if (x[i] > y[i])
            {
                cout << "1" << endl;
                break;
            }
        }
    }
}