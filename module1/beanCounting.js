// declare function called count bs
// loop through the string and find the value
// iff found, increment ...

const countBs = (stringTocount, charTocount ) =>{
    let countChar = 0
    for (let i = 0; i < stringTocount.length; i++ ){
        if (stringTocount[i]==charTocount){
            countChar++;
            
        }
        
    }
    return countChar;
}
console.log(countBs("BOBBBbbvb", "b"));