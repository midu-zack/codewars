// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// find a string reverse in recursion method

function reverse(str) {

  if (str.length <= 1) {

    return str;

  }

  return reverse(str.substr(1)) + str.charAt(0);

}

console.log(reverse("ABCD"));



le



// find A factorial

function fact(n) {

  if (n <= 1) {
    return 1;
  }

  return fact(n - 1) * n;

}
console.log(fact(5));
