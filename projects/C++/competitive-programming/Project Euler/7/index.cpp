#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    int flag = 0;
    int count = 1;
    int m, n;
    int number;

    while (n <= 10001)
    {
        // prime number

        m = n / 2;
        flag = 0;

        for (int i = 2; i < m; i++)
        {
            // if the number is not prime
            if (n % i == 0)
            {
                flag = 1;
            }
            if (flag == 0)
            {
                if (count == 6)
                {
                    cout << n;
                    break;
                }
                count++;
            }
            n++;
        }
    }
}
