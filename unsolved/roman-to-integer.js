// https://leetcode.com/problems/roman-to-integer/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L(50) and C(100) to make 40 and 90.
// C can be placed before D(500) and M(1000) to make 400 and 900.


var romanToInt = function (s) {
    let I = 1;
    let IV = 4;
    let V = 5;
    let IX = 9;
    let X = 10;
    let XL = 40;
    let L = 50;
    let XC = 90;
    let C = 100;
    let CD = 400;
    let D = 500;
    let CM = 900;
    let M = 1000;

};