function rentalCarCost(d) {
    // Your solution here
    let total = d*40
    let result = 0;

    if( d < 3 ){
        result = total;
        console.log(result);

    }else if( d >=3 && d<7 ){
        result=total-20;
        console.log(result);
    }else{
        result = total - 50;
        console.log(result);
    }
    return result;
  }

  rentalCarCost(2)