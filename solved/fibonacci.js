
// This function uses an array that is filled with the fibonacci sequence up to the provided digit, then returns the last result. This is known as iterative. 
getNthFib = (n) => {
    let fibArray = [0, 1]
    if (n < 3) {
        return fibArray[n - 1]
    } else {
        for (let i = 2; i < n; i++) {
            fibArray.push(fibArray[i - 2] + fibArray[i - 1])
        }
        return fibArray[n - 1]
    }
}

// Testing the iterative 
console.log(getNthFib(100))


// This is the recursive solution to this problem. At a glance, it seems like a simple and elegant solution, but looking further, you notice that each time the function is called, it then calls two of itself, and so on. In each time that it is called with a number provided above 2 (or above any number), it has to accomplish the same calculation eventually in every new branch. This is not efficient, and the amount of time that it takes to compute the solution is exponential in complexity. 
getNthFibRecursive = (n) => {
    if (n < 2) {
        return n
    } else {
        return getNthFibRecursive(n - 1) + getNthFibRecursive(n - 2)
    }

}

// Testing the recursive solution.

// console.log(getNthFibRecursive(6))

// As a solution to the complexity issue above, this recursive function rather passes in two new parameters. Their default values are the two first numbers of the fibonacci sequence. When the function first runs, it uses these numbers to calculate the third, and so on. While this function is still recursive, it only calls itself once within the function, and it is linear in its calculations instead of branching. The issue is that we still must account for edge cases in a verbose manner.

getNthFibRecursiveIterative = (n, prev = 0, curr = 1) => {
    if (n > 2) {
        return (getNthFibRecursiveIterative(n - 1, curr, prev + curr))
    } else if (n == 2) {
        return curr
    } else if (n < 2) {
        return prev
    }

}

console.log(getNthFibRecursiveIterative(100))