// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h,m,s){
    let result = ((h * 3600) + (m * 60) + s) * 1000;
    return result;
  }
  
  console.log(past(3, 30, 45));
 