//input array, check increasing sequence ?
//output true/false
function arrayInc(sequence) {
    for(var i = 0; i < sequence.length-1 ; i++){
        if(sequence.length === 1)
            return true;
        else{
            if(sequence[i] < sequence[i+1])
            {
                    continue;
            }
            else
                return false;
        }
   }
    return true;
}
module.exports = arrayInc;

