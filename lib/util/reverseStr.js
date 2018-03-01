// str="abc" --> "cba"
function reverseStr(s){
    var str="";
    var l=s.length;
    var i=l-1;
    while(i>=0){
        str+=s[i];
        i--;
    }
    return str;
}
module.exports = reverseStr;
