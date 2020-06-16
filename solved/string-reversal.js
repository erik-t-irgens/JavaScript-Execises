const stringReversal = (text) => {

    // The string must be split before you can modify its contents, but you can still avoid instanitating a new variable by directly modifying it like so.
    text = text.split('')

    // You only need to iterate over half of the string, as it replaced both sides at once. The .floor is for uneven strings, in which the middle-most character will stay the same regardless.
    let limit = Math.floor(text.length / 2)

    for (let i = 0; i < limit; i++) {

        // Imagine that i is being used as the swapFROMLocation, or the beginning of the string. swapATLocation is the end of the string. Just a position.
        let swapAtLocation = text.length - i - 1;

        // Two new variables are instantiated to hold the value of the string. In shorter string parameters, this has larger memory overhead as opposed to just creating a new string variable with a for loop that goes backwards. However, in longer strings, this is negligible. 

        let firstLetter = text[i]
        let secondLetter = text[swapAtLocation]

        text[i] = secondLetter;
        text[swapAtLocation] = firstLetter

        console.log('switching ' + firstLetter + ' with ' + secondLetter)
    }


    return text.join('')
}

// Arguments passed in through the console, which begin at the 2 index.
const args = process.argv.slice(2);
let text = args.toString()
console.log('Final result: ' + stringReversal(text))