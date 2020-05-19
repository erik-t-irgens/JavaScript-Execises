// https://leetcode.com/problems/zigzag-conversion/

// Given string, and numRows, print original string is a zig-zag pattern (reading down numRows in characters, then up/right diagonally)

// example

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// [
// [P     I    N],
// [A   L S  I G]
// [Y A   H R]
// [P     I]
// ]

// 1 take string
// 2 take num of rows
// 3 create an array with (numRows) arrays
// 4 add characters vertically
// 5 have some sort of switch that determines direction of the for loop for adding letters. 


const zigZagConvert = (string, numRows) => {

    if (numRows <= 1) {
        return string
    }
    let twoDArray = []


    // Create necessary rows according to the numRows
    for (let i = 0; i < numRows; i++) {
        twoDArray.push([])
    }

    // indexers and trackers

    let i = 0
    let j = 0
    let increment = true

    for (let char = 0; char < string.length; char++) {


        if (i === numRows) {
            increment = false
            i--
        }
        if (i === 0) {
            increment = true
        }

        if (increment === true) {
            while (twoDArray[i][j] === undefined) {
                twoDArray[i].push('')
            }
            twoDArray[i][j] = string[char]
            if (i < numRows) {
                i++
            }
            console.log(i, string[char])

        } else {
            i--
            j++
            while (twoDArray[i][j] === undefined) {
                twoDArray[i].push('')
            }
            twoDArray[i][j] = string[char]
            console.log(i, string[char])
        }


    }

    printZigZag(twoDArray)

}

printZigZag = (array) => {
    array = array.flat()
    let finalString = []
    array.forEach(char => char != '' ? finalString.push(char) : null)

    console.log(finalString.join(''))
}

zigZagConvert('PAYPALISHIRING', 5)