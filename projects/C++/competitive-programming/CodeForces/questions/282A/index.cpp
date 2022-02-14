#include <bits/stdc++.h>
#include <string>

using namespace std;

int main()
{
   int X = 0; // initial value
   int t; // no of test cases
   cin >> t;
   string s;

   while (t) {
       cin >> s;
       if (s == "++X" || s == "X++") X++;
       if (s == "--X" ||s  == "X--") X--;

       t--;
   }

   cout << X;
}