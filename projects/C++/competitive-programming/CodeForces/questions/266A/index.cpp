#include <iostream>
#include <string>
#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    string s;
    cin >> n;
    cin >> s;

    int i = 0, ans = 0;
     
    // checking through all the stones
    while (i + 1 < n)
    {
        // checking if two stones are the same for each and every letter
        while (i + 1 < n && s[i] == s[i + 1])
        {
           ans++;
           i++;
        }
        i++;
    }
    cout << ans;
}