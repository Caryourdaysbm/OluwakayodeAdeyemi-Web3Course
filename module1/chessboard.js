let black = "";
let width = 8;
let height = 8;

for (let i = 0; i < width; i++){
    for (let j = 0; j < height; j++){
        if ((i + j) % 2 == 0){
            black += " ";
            } else {
                black +=  "#"; 
            }

        
    }
   black += "\n";
}
console.log(black);