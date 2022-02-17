#include <iostream>
#include <string>
#include <bits/stdc++.h>
#include <cmath>
#include <vector>

using namespace std;

int main()
{
    int tram = 0;
    int n;
    cin >> n;
    int ans = 0;
    int curr = 0;
    while (n--)
    {
        int a, b;
        cin >> a >> b;

        // when people get off and on
        curr += (b - a);

        // checks if the current number of people on the train is more than what we have now
        ans = max(ans, curr);
    }

    cout << ans;
}