#include <bits/stdc++.h>
#include <iostream>
#include <stdlib.h>
#include <cmath>
#include <string>

using namespace std;

int main()
{
    string exp, new_exp;
    cin >> exp;

    for (int i = 0; i < exp.size(); i++)
    {
        // if they are in decreasing order
        if (exp[i] != '+')
        {
            new_exp.push_back(exp[i]);
        }
    }
    // sort the elements in ascending order
    sort(new_exp.begin(), new_exp.end());

    // print out the first number before adding '+'
    cout << new_exp[0];

    // adding '+' between integers
    for (int i = 1; i < new_exp.length(); i++)
    {
        cout << "+" << new_exp[i];
    }
}