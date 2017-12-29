// Sum of a given sequence using only 
// a while loop

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  } else if (begin === end) {
    return begin;
  }
  
  let sum = 0;
  
  while (begin <= end) {
    sum += begin;
    begin += step;
  }
  
  return sum;
};