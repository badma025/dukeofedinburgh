#include <bits/stdc++.h>
#include <string>

using namespace std;

int main()
{
    int m; // length
    int n; // width
    int dominoArea = 2; // the area of a 2 x 1 domino
    cin >> m >> n;
    int o = m * n; // board area
    int ans = trunc(o / dominoArea);

    cout << ans;
    
}