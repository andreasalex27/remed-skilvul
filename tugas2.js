function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([1,5,7,8]))

function sumArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

console.log(sumArray([5,4,8,2]))