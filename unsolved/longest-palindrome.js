const longestPalindrome = (array) => {
  let longest = ""
  for (let i = 0; i < array.length; i++){
    if (palindromeCheck(array[i])){
        if (array[i].length > longest.length){
          longest = array[i];
        }
     }
  }
  return longest;
}

const palindromeCheck = (word) => {
 for (i = 0; i < word.length / 2; i++){
   if (word[i] != word[word.length - 1 - i]){
     return false;
   }
 }
  return true;
}
