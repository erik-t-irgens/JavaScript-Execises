subarraySumK = (arr, k) => {
    let counter = 0

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length - 1; j++) {
            let currentTotal = 0
            for (let h = i; h < j; h++) {
                currentTotal += arr[h]
                // adds i, then every number between i and j. If it ever equates to k, it adds to the counter. However, it checks every possible continuous array within the array, not including itself (as long as h is < j). 
                if (currentTotal == k) {
                    counter++
                }
            }
        }
    }
    console.log(counter)
}

subarraySumK([1, 1], 2)