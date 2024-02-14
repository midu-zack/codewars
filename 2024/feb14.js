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
