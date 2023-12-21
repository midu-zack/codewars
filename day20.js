// function positiveSum(arr) {

//     sum = 0;
//      for(let i = 0 ; i < arr.length ; i++){
//         sum = sum+arr[i];
//      }
//     //  console.log(sum);
//     return sum;
    
//   }

//   positiveSum([10,20,80,40])





//   correction in codewars

function positiveSum(arr) {

     let sum = 0;
     for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]>0){

            sum = sum+arr[i];
        }
      
     }
 
    return sum;
    
  }

console.log(positiveSum([10,20,80,40]));





