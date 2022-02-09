#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main()
{
    string word;

    cout << "Enter the word to spell: ";
    cin >> word;

    for (int i = 0; i < word.length(); i++) {
       cout << word.at(i) << " ";
    }

    cout << "Your word has " << word.length() << " letters.";
}