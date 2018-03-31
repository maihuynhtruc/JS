//Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first half of the digits is
// equal to the sum of the second half.
//For n = 1230, the output should be isLucky(n) = true;
//For n = 239017, the output should be isLucky(n) = false.
function isLucky(n) {
    var str = n.toString();
    var l = str.length;
    var sum1 = 0, sum2 = 0;
    for(var i = 0, j = l / 2; i < l / 2, j < l; i++, j++) {
        sum1+=parseInt(str[i]);
        sum2+= parseInt(str[j]);
        }
    if(sum1==sum2){
        return true;
    }
    return false;
}
module.exports =isLucky;
