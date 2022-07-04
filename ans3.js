var newNumbers = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]
var count = {};
var newArr = [];
for (var index = 0; index < newNumbers.length; index++) {
    if (!newArr.includes(newNumbers[index])) {
        newArr.push(newNumbers[index])
    }
    else {

        count[newNumbers[index]] = (count[newNumbers[index]] || 1) + 1;
    }
}
console.log(count);




