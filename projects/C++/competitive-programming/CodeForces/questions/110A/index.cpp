#include <iostream>
#include <string>
#include <bits/stdc++.h>

using namespace std;

int main()
{
    string n;
    cin >> n;
    int64_t total = 0;

    // for every character in the 'n' string
    for (char c : n)
        if (c == '4' || c == '7')
            total++;

    string s = to_string(total);

    // is the total a nearly lucky number
    for (char c : s)
        if (c != '4' && c != '7')
        {
            cout << "NO";
            return 0;
        }

    cout << "YES";
}