#include <iostream>
#include <string>
#include <bits/stdc++.h>

using namespace std;

int main()
{
  int n;
  int t;
  string s;
  cin >> n >> t;
  cin >> s;

  // the number of seconds
  while (t--)
  {
    for (int i = 0; i + 1 < n; i++)
    {
      // if a girl is behind a boy
      if (s[i] == 'B' && s[i + 1] == 'G')
      {
        s[i] = 'G', s[i + 1] = 'B', i++;
      }
    }
  }
  cout << s;
}