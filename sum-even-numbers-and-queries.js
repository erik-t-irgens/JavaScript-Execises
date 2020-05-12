// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

// A= [int, int, int, int]
// queries=[[int, index],[int, index],[int, index],[int, index]]
const sumEvenAfterQueries = (A, queries) => {

    let answers = []
    A.forEach(index => answers.push(0))

    for (let i = 0; i < queries.length; i++) {
        A[queries[i][1]] = A[queries[i][1]] + queries[i][0]
        A.forEach(int => int % 2 == 0 ? answers[i] += int : answers[i] += 0)
    }
    return answers
};

console.log(sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]))
// [8,6,2,4]