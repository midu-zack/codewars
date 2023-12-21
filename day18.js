// const value = "Good morning";

// const result = value.charCodeAt(0)

// console.log(result);


// function getChar(c){
    
   
//     const result =String(c).charCodeAt()
//     console.log(result);
    
//   } 

//  getChar("a")





//  function getChar(c){
    
   
//     return String.fromCharCode(c)
     
    
//   } 


//   console.log(getChar('a'));







function peopleWithAgeDrink(age){
    if(age < 14){
        drink = 'toddy'
    }else if(age < 18){
        drink = 'coke'
    }else if(age < 21){
        drink = 'beer'
    }else if(age => 21){
        drink = 'whisky'
    }
    
    // return drink + " drink";
    console.log(drink);


}

// console.log(peopleWithAgeDrink(3));
peopleWithAgeDrink(18)