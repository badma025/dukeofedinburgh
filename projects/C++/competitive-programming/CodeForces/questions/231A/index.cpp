#include <bits/stdc++.h>
#include <string>

using namespace std;

int main()
{
    int t; // for the test cases
    cin >> t;
    int count = 0; // to store the count of questions to attempt

    while (t) {
        int a,b,c; // to store the result of each friends' answer
        cin >> a >> b >> c;

        // if the results agree
        if (a+b == 2 || b+c == 2 || a+c == 2) {
            count++;
        };

        t--;
    };

    cout << count;

}