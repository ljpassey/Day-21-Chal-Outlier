// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

let array = [2, 4, 0, 100, 4, 11, 2602, 36] 

let array2 = [160, 3, 1719, 19, 11, 13, -21] 

//-----solution------//

let findOutlier = (arr) => {
    let evenNums = []
    let oddNums = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNums.push(arr[i])
        } else {
            oddNums.push(arr[i])
        }
    }

    if (evenNums.length > oddNums.length) {
        return console.log(oddNums)
    } else {
        return console.log(evenNums)
    }
}


findOutlier(array)
findOutlier(array2)