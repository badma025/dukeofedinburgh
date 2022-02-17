#include <iostream>
#include <string>
#include <set>
#include <bits/stdc++.h>

using namespace std;

bool distinct(int n)
{
    set<int> st;
    while (n)
    {
        if (st.find(n) != st.end())
            return false;
        st.insert(n % 10);
        n /= 10; 
    }
    return true;
}

int main()
{
    int y;
    cin >> y;

    // so we don't return the same year
    ++y;

    while (!distinct(y)) ++y;

    cout << y;
}