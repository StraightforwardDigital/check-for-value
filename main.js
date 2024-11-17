function check(a, x) {
  //Use .some method to check array for value x
  const checkForValue = a.some(num => num === x);
  //.some returns true or false
  return checkForValue;
}