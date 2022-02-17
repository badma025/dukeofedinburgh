#include <iostream>
#include <string>
#include <bits/stdc++.h>

using namespace std;

int main()
{
    // a = limak and b = bob
    int a, b;
    cin >> a >> b;
    int year = 0;

    // every year
    while (a <= b)
    {
        a *= 3;
        b *= 2;
        year++;
    }
    cout << year;
}