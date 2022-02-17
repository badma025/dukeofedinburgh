#include <iostream>
#include <string>
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int k, n, w;
    int pay;
    cin >> k >> n >> w;

     pay = k * w * (w + 1) / 2;
    
        if (pay > n)
        {
            cout << abs(pay - n);
        } else {
            cout << "0";
        }
    
}