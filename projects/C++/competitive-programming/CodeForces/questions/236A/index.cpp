#include <bits/stdc++.h>
#include <iostream>
#include <stdlib.h>
#include <cmath>
#include <string>

using namespace std;

int main()
{
    string username;
    cin >> username;
    
    int count = 0;
    sort(username.begin(), username.end());

    for (int i = 0; i < username.length(); i++)
    {
        if (username[i] != username[i+1])
        {
           count++;
        }
        
    }
    
    if (count % 2 == 0)
    {
        cout << "CHAT WITH HER!";
    }
    else
    {
        cout << "IGNORE HIM!";
    }
    
}