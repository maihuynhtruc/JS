//Given an array of strings, return another array containing a longest string.
//inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
//longestString(inputArray) = ["aba"].
function longestString(inputArray) {
    var l=inputArray.length;
    var t=inputArray[0];
    for(var i=0; i<l-1 ; i++)
    {
        if(t.length> inputArray[i+1].length)
        {
            t=inputArray[i];
        }
        else{
            t=inputArray[i+1];
        }
    }
    return t;
}
module.exports = longestString;

