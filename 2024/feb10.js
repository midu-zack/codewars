function minMax(arr){
     
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return [min,max]
  }

console.log(minMax([1,2,3,4,5,3]));





function findDifference(a, b) {
  
    let result = a.reduce((acc,val)=> acc*val, 1) 
    let result1 =  b.reduce((acc,val)=> acc*val, 1)
    
   return Math.abs(result-result1)
    
  }

 console.log( findDifference([2,333,4],[2,8,9]));

