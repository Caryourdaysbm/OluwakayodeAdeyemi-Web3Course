const everything = (array, predicate) => {
    for (let element of array){
    if (!predicate(element)){
        return false;
    }
}
return true;
}

//2nd method
function every(array, test) {
    // Your code here.
    return !array.some(element => !test(element));
  }


console.log(everything([1, 3, 5], n => n < 10));
// → true
console.log(everything([2, 4, 16], n => n < 10));
// → false
console.log(everything([], n => n < 10));
// → true

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true