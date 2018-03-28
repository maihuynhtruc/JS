//input str, check it :Palindrome ?
function checkPalindrome(str){
    for(var i=0 ; i < str.length ; i++){
        var j=(str.length-1)-i;
        if(str[i] != str[j]) {
            return false;
        }
    }
    return true;
}
module.exports = checkPalindrome ;
