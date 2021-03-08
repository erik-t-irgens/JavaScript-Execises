// Problem: Given an input of orders, sort them from essential orders to non - essential orders.Each order contains an alphanumeric tag, followed by a space, which is then followed by another tag of either numbers only(non - essential) or a - z characters(essential).Return an lexicographically ordered version of this list of orders, with the essential orders first, and non - essential last.If the second half of the order information matches another order, order them by the first half.

// 1) Split each order between two new arrays, essential and nonEssential
// a) If the order's second tag contains characters, add it to essential
// b) otherwise, move it to nonEssential
// ex) for each element in orderArray, if (element.substring(element.indexOf(' ') + 1).includes(characters a - z) { essential.push(element) } else { nonEssential.push(element) }
// 2) Sort each array using the built -in sort function.
// a) sort each element using the sort function (array.sort(function (a, b) {
//   return a.substring(a.indexOf(' ') + 1) - b.substring(b.indexOf(' ') + 1) // Not sure that works at all
//   b) After that, iterate over each element and check to see if the second tag is repeated.If it is, sort those elements according to their first tag
//   3) In a third array, add the essential and nonessential orders together in their new order, and return.

const compareOrders = (a, b) => {
  if (a.substring(a.indexOf(' ') + 1) < b.substring(b.indexOf(' ') + 1)) {
    return -1
  } else if (a.substring(a.indexOf(' ') + 1) > b.substring(b.indexOf(' ') + 1)) {
    return 1
  } else {
    if (a.substring(0, a.indexOf(' ')) < b.substring(0, b.indexOf(' '))) {
      return -1
    } else if (a.substring(0, a.indexOf(' ')) > b.substring(0, b.indexOf(' '))) {
      return 1
    }
  }
}

const sortOrders = (orderArray) => {
  let primeArray = []
  let nonPrimeArray = []

  let sortedArray = []

  for (let i = 0; i < orderArray.length; i++) {
    if (isNaN(parseInt(orderArray[i].substring(orderArray[i].indexOf(' ') + 1)[0]))) {
      primeArray.push(orderArray[i])
    } else {
      nonPrimeArray.push(orderArray[i])
    }
  }

  sortedArray = primeArray.sort(compareOrders)

  for (let i = 0; i < nonPrimeArray.length; i++) {
    sortedArray.push(nonPrimeArray[i])
  }

  console.log(primeArray)
  console.log(nonPrimeArray)
  console.log(sortedArray)
}



const orders = ["awda 124 123078", "d08712 b", "01273 a", "8888 d", "awd, d", "awkdhak a", "poiefoi 201009237", "w0909 92929", "awd b"]


sortOrders(orders)
