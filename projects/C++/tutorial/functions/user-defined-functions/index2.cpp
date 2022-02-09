#include <iostream>
#include <string>
#include <algorithm>
#include <cmath>
using namespace std;


double add (int first_number, int second_number) {
  double result = first_number + second_number;

  return result;
}

int main()
{
    double number1;
    double number2;

    cout << "Enter in #1: ";
    cin >> number1;

    cout << "Enter in #2: ";
    cin >> number2;

    double result = add(number1, number2);

    cout << "Your result is: " << result << endl;

}
