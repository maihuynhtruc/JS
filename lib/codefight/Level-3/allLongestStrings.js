//Given an array of strings, return another array containing all of its longest strings.
//inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
//allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
function allLongestStrings(inputArray) {
    var l=inputArray.length;
    var longest=inputArray[0];
    var result=[];
    if(l==1) {
        return  [longest];
    }
    else {
        for(var i=1 ; i<l ; i++)
        {
            if(longest.length>inputArray[i].length)
            {
            }
            else {
                if(longest.length==inputArray[i].length)
                {
                    result.push(longest);
                    longest=inputArray[i];
                    console.log(result);
                }
                else
                {
                    longest=inputArray[i];
                    result=[];
                }
            }
        }
    }
    result.push(longest);
    return result;
}
module.exports = allLongestStrings;

