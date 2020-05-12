// https://leetcode.com/problems/robot-return-to-origin/

// Given a string of characters (UDLR etc), find where the Robot is after the instructions are given, given that he starts at (0, 0). If he is at origin, return true, else false. 

const robotReturn = (instructions) => {
    let position = [0, 0]
    instructions.split('').forEach(instruction => {
        if (instruction.toUpperCase() == 'U') {
            position[0]++
        } else if (instruction.toUpperCase() == 'D') {
            position[0]--
        } else if (instruction.toUpperCase() == 'L') {
            position[1]--
        } else if (instruction.toUpperCase() == 'R') {
            position[1]++
        } else {
            console.log("Instructions are not valid. Try again.")
            return
        }
    }
    )
    if (position[0] == 0 && position[1] == 0) {
        return true
    }
    return false
}

console.log(robotReturn('UDLR')) // true
console.log(robotReturn("LL")) // false