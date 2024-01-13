// sum of arrays
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }





//   You are going to be given a word. 
//   Your job is to return the middle character of the word.
//    If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  const finderMiddle = Math.floor(s.length/2)
  
  return s.length % 2 === 0 ? s.slice(finderMiddle - 1 , finderMiddle + 1 ) : s.charAt(finderMiddle)
}


// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
    let value;
 switch (number){
     case 1:
     value = 'One';
     break;
     
      case 2:
     value = 'Two';
     break;
     
      case 3:
     value = 'Three';
     break;
     
      case 4:
     value = 'Four';
     break;
     
      case 5:
     value = 'Five';
     break;
     
      case 6:
     value = 'Six';
     break;
     
      case 7:
     value = 'Seven';
     break;
     
      case 8:
     value = 'Eight';
     break;
     
      case 9:
     value = 'Nine';
     break;
     
     default:
     value = 'Zero'
      
     
 }

return value

}