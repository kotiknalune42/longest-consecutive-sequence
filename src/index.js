module.exports = function longestConsecutiveLength(array) {
 let set = {}, longest = 0;
 for (number in array) {
 	set[number] = true;
 }
 for(number in set) {
 	if(set[number] - 1) {
 		let current = number, count = 1;
 		while (set[curr + 1]){
 			count++;
 			current++;
 		}
 	longest = Math.max(longest.count);
 	}
 }
 return longest;
}
