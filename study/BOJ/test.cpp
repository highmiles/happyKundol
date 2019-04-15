#include <iostream>
#include <algorithm>  
using namespace std;  
int div(int a, int b){
    return (int) (a / (float)b);
} 
int main(){
    int a = 1; 
    int b = 0; 
    cout << div(a, b) << "\n"; 
    return 0;
}
 