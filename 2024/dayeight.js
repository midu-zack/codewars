
// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter,
//  vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise




function setAlarm(employed, vacation){
  
    return employed && !vacation 
  
  }
   

//   Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//   Examples
//   "www.codewars.com#about" --> "www.codewars.com"
//   "www.codewars.com?page=1" -->"www.codewars.com?page=1"

  function removeUrlAnchor(url){
    // TODO: complete
    return url.split('#')[0]
    
    
  }