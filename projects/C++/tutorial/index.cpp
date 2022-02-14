#include <iostream>
using namespace std;
int sum = 0;

int simpleArraySum(int[] array)
{
    for (int i = 0; i < sizeof(array) / sizeof(array[0]); i++)
    {
        sum = sum + ar[i];
    }
    return sum;
}

int main()
{
    cout << simpleArraySum([ 3, 4, 5, 6, 7 ]);
}