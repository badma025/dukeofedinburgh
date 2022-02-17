#include <iostream>
#include <string>
#include <bits/stdc++.h>
#include <cmath>

using namespace std;

int main()
{
    int n, k;
    cin >> n >> k;

    while (k != 0)
    {
        // if the last digit is 0
        if (n % 10 == 0)
        {
            n /= 10;
        }
        // if the last digit is not 0
        else if (n % 10 != 0)
        {

            n--;
        }

        k--;
    }

    cout << n;
}