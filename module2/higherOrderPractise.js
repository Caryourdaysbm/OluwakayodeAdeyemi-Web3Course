let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

//
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  
let labels = [];
repeat(5, i =>{
    labels.push(`Unit ${i+1}`);

});

console.log(labels);

labels.forEach(i =>{
    labels.push(`Unit ${i+1}`);

});

console.log(labels);