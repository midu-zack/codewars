function maps(x){
  
    return x.map((val)=>val+val)
     
  
  }




  function reverseList(list) {
    return list.reverse()
    
  }



  function getGrade(s1, s2, s3) {
    var average = (s1 + s2 + s3) / 3

    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}


// function x(n){

//     if(n<=1){
//         return 1
//     }

//     return n*x(n-1) 


// }

// console.log(x(5));

 function reverse(string){

    if(string===''|| string.length === 1){

        return string;

    }

    return reverse(string.substr(1))+ string.charAt(0)

 } 

 
console.log(reverse('ABCD'));
