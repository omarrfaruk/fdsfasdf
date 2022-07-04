function uValues(array) {
    if (array.length === 0) return array;
    array = array.sort(function (a, b) { return a - b; });
    var val = [array[0]];
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] !== array[i]) {
            val.push(array[i]);
        }
    }
    return val;
}

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]
var uniqueValues = uValues(arr)
console.log(uniqueValues);

