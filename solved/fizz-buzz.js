// Counts to 100 on each line
// If it is a multiple of 3, print Fizz instead of the number. 
// If multiple of 5,  print Buzz instead of number. 
// If multiple of both 3 and 5, print FizzBuzz instead of the number. 


// Test 1, recursively. 

const FizzBuzz = (counter = 1) => {


    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log("FizzBuzz")
    } else if (counter % 3 == 0) {
        console.log("Fizz")
    } else if (counter % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(counter)
    }

    if (counter < 100) {
        FizzBuzz(counter + 1)
    } else {
        return
    }

}

// Test  with While Loop
const FizzBuzz2 = () => {
    let counter = 1
    while (counter < 101) {
        if (counter % 3 == 0 && counter % 5 == 0) {
            console.log("FizzBuzz")
        } else if (counter % 3 == 0) {
            console.log("Fizz")
        } else if (counter % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(counter)
        }
        counter++
    }
}

FizzBuzz()
FizzBuzz2()