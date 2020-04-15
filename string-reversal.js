var args = process.argv.slice(2);



const stringReversal = (string) => {
    let limit = Math.floor(text.length / 2)

    for (let i = 0; i < limit; i++) {
        let swapAtLocation = text.length - i - 1;
        let firstLetter = text[i]
        let secondLetter = text[swapAtLocation]

        text[i] = secondLetter;
        text[swapAtLocation] = firstLetter
    }

    console.log(text)
    return text
}

var text = args[0].toString()
text = stringReversal(text)