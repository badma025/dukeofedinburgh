#include <iostream>
#include <string>
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    int anton = 0, danik = 0;
    string s;
    cin >> n;
    cin >> s;

    // checking to see who has won more games
    for (int i = 0; i < n; i++)
    {
        if (s[i] == 'A')
        {
            anton++;
        }
        else if (s[i] == 'D')
        {
            danik++;
        }
    }

    if (anton > danik)
    {
        cout << "Anton";
    }
    else if (danik > anton)
    {
        cout << "Danik";
    }
    else
    {
        cout << "Friendship";
    }
}