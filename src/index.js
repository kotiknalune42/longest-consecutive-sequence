module.exports = function longestConsecutiveLength(array) {
    let len = array.length,
        count = 1,
        sequenceLength = 0;
    if (len === 0) return 0;
    if (len === 1) return 1;

    array.sort(function(a, b) {
        return a - b;
    });

    for (number in array) {
        let x = array[number],
            y = array[number - 1];
        // console.log("number:" + number + "x " + x + "y " + y)
        if (x - y === 'undefined') continue;
        if (x - y === 1) count++;
        if (x - y > 1) {
            sequenceLength = (count > sequenceLength) ? count : sequenceLength;
            count = 1;
        }
    }
    return sequenceLength;
}
