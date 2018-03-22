//Given a sequence of integers as an array
//removing no more than one element from the array
//whether it is possible to obtain a strictly increasing sequence
//output true/false
var arrayInc = require('../../util/arrayInc');
function almostIncreasingSequence(sequence) {
    for(var i = 0; i < sequence.length ; i++){
        if(sequence.length===1)
            return true;
        else {
            var temp = Object.assign([], sequence);
            temp.splice(i, 1);
            if(arrayInc(temp)){
                return true;
            }
        }
    }
    return false;
}
module.exports = almostIncreasingSequence;