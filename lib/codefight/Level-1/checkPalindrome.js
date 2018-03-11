//input str, check it :Palindrome ?
function checkPalindrome(str){
   // console.log(str.length);
    for(var i=0 ; i < str.length ; i++){
        var j=(str.length-1)-i;
        console.log((str.length-1)-i+ "hh");
        if(str[i] != str[j]) {
            // console.log(str[i] + "ii");
            // console.log(str[j] + "jj");
            return false;
        }
    }
    return true;
}
module.exports = checkPalindrome ;
