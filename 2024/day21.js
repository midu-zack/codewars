function reverseDigits(n) {
  
    return n.split('').reverse().join('')

}

console.log(reverseDigits('hello'));



// next
function between(a, b) {
  
    let array = []
    
    for(let i = a ; i <= b; i++){
      
        array.push(i)
      
    }
    
    return array
    
    
  }