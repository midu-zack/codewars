// function invert(array) {
  
//     if(array > 0){
        
//         console.log("POSTIVE NUMBER");
      
//     }else {
//         console.log("negetive number");
//     }
      

//   }

// invert(-1)


// This code in true
function invert (array){

    
    return array.map((x)=>  x === 0  ? x : -x)   //if condision working in ternery opretor ,, x user ender the value

}
console.log(invert([6,-7,8,-9]));





function getAge(num){

    return parseInt(num)  // all types convert to digit 
}

console.log(getAge("2"));




    function digitize(n) {
    
        const sortNumber = n.sort((a,b)=>b-a)
        
        console.log(sortNumber);
    }

    digitize([128,28,23,1,29])

