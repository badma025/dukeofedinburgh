#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main()
{
    string answer;
    //  do while executes once and loops depending on the while condition
    do
    {
        cout << "You are playing THE GAME" << endl;
        cout << "*  pew pew  *" << endl;
        cout << "Press q to quit!" << endl;
        getline(cin, answer);
        cout << "****************************" << endl;
    } while (answer.at(0) != 'q' && answer.at(0) != 'Q');

    cout << "You quit the game!";
}