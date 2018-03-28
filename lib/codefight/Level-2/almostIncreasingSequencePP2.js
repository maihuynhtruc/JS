function almostIncreasingSequencePP2(sequence){
    var t=0;
    var sn1, sn2,sn3,s;
    if (sequence.length=== 1)
        return true;
    else{
        for( var i=0; i < sequence.length-1 ; i++) {
            if (sequence[i] < sequence[i + 1]) {
                continue;
            }
            else {
                t++;
                sn1 = sequence[i-1];
                sn2 = sequence[i+1];
                s = sequence[i];
                sn3 = sequence[i+2];
            }
        }
            if(t<2 &&  (!sn1 || !sn2 || !sn3 || (sn1<sn2 || s<sn3))) {
                return true;
            }
           return false;
    }
}
module.exports = almostIncreasingSequencePP2;
