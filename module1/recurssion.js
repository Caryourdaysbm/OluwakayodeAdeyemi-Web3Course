// define a function
const isEven= (N) => {

// check if even and return true
    // return true if zero
    if ( N == 0){
        return true;
    } 
    // return false if one
    else if (N == 1)
    {
        return false
    } else if (N < 0){
        return null
    }
        
    // call  the fuction recurssivelly
    else{
        return isEven(N-2);
    }
    
}
console.log(isEven(75))
console.log(isEven(50))
console.log(isEven(-1))
