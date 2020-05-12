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

console.log(getNthFib(100))

getNthFibRecursive = (n) => {
    if (n < 2) {
        return n
    } else {
        return getNthFibRecursive(n - 1) + getNthFibRecursive(n - 2)
    }

}

console.log(getNthFibRecursive(6))

getNthFibRecursiveIterative = (n, prev = 0, curr = 1) => {
    if (n > 1) {
        let previous = prev
        let current = curr
        return (getNthFibRecursiveIterative(n - 1, current, previous + current))
    }
    return curr
}

console.log(getNthFibRecursiveIterative(100))