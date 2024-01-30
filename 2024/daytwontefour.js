// string repeat

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


function repeatStr (n, s) {
  
    return s.repeat(n);
    
  }



//   Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


function isPalindrome(x) {
    // your code here
    
    let test = x.toLowerCase('')
    
    let pali = test.length - 1 
    
    for(let i = 0 ; i < test.length/2 ; i++){
      
       if(test[i] !== test[pali])  {
         
           return false
         
       }else {
         
         pali--
         
         
          return true
      
       }
      
       
    }
    return true
  
  }
       
//   You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//   You can assume all values in the array are numbers.  


function smallEnough(a, limit){
  
    for(let i = 0 ; i < a.length ; i++){
    
      if(a[i] > limit){
        
        return false
      } 
      
    }
    
    return true
   
  }


//   simple method
function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }