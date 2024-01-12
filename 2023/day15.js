// remove the vowels character

function shortcut (string) {

    var result = string.replace(/[a,e,i,o,u]/g, '' )
                     

    console.log(result);

    // return string.replace('i', '')  .replace('m', '')
  
  }

  shortcut('miduzack')

// console.log( shortcut('miduzack'));



// always return 5 return 

function unusualFive() {
    return 'zacky'.length;
  }




  

//   3


function cockroachSpeed(s) {
   
    const secInHoure = 3600;
    const secKiloMeters = 100000;
    
    return Math.floor((s * secKiloMeters) / secInHoure)
    
  }