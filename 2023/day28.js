
function openOrSenior(data){

    return data.map(([age,handicap])=>( age > 54 && handicap > 7) ? 'Senior' : 'Open')
    
  } 
 

  const result = openOrSenior([[29,32],[89,90],[23,43]])

  console.log(result);