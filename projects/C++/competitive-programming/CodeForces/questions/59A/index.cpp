#include <iostream>
#include <string>
#include <bits/stdc++.h>
#include <cmath>

using namespace std;

int main()
{
    int lowercase = 0;
    int uppercase = 0;
    string s;
    cin >> s;

    //  check the case of each letter in the string
    for (int i = 0; i < s.length(); i++)
    {
        if ((int)s[i] < 96)
        {
            uppercase++;
        }
        else
        {
            lowercase++;
        }
    }

    // if there are an equal number of uppercase and lowercase letters in the string
    if (uppercase == lowercase)
    {
        transform(s.begin(), s.end(), s.begin(), ::tolower);
        cout << s;
    }
    // if there are more uppercase than lowercase characters in the string
    else if (uppercase > lowercase)
    {
        transform(s.begin(), s.end(), s.begin(), ::toupper);

        cout << s;
    }
    // if there are more lowercase than uppercase characters in the string

    else if (lowercase > uppercase)
    {
        transform(s.begin(), s.end(), s.begin(), ::tolower);
        cout << s;
    }
}