
function indexOfHighest(){ 
  let arr = [-1, 0, 5, 1, 5, 3, 4, 3];
  let largest = 0;

  for (i=-0; i < arr.length; i++) {
  if (arr[i] > largest) {
   largest = i;
  }
}

return largest;
}
console.log(indexOfHighest("largest"));

