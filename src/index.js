module.exports = function longestConsecutiveLength(array) {
    let len = array.length, count = 1, sequence = 0;
    if(len === 0) return 0;
    if(len === 1) return 1;

  array.sort(function(a,b){return a - b;});
  for(number in array) {
    let x = array[number], y = array[number - 1];
     if(x - y === 0) continue;
     if(x - y === 1) count++;
     if(x - y > 1){
        sequence = (count > sequence)? count : sequence;
        count=1;
  }
}
    return sequence; 
}
