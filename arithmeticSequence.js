function arithmeticSequenceElements(a,r,n) {
  let sequence = '';
  let currentNumber = a;
  
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      sequence += currentNumber + ', ';
    } else {
      sequence += currentNumber;
    };
    currentNumber += r;
  };
  
  return sequence;
}