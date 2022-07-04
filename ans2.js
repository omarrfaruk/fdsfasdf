// function largestOfFour(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var largest = [0][0];
//         for (var j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > largest) {
//                 largest = arr[i][j];
//             }
//         }
//     }

//     return largest;

// }



var arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];


var largest = largestOfFour(arr);

console.log(largest);





// function highest(numbers) {

//     let high = numbers[0];

//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i]

//         if (element > high) {
//             high = element
//         }
//     }
//     return high;


// }

// const myNumbers = [1, 3, 41, 7, 8];

// const result = highest(myNumbers)
// console.log(result);