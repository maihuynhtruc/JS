//For string s = "a(bc)de", the output should be reverseParentheses(s) = "acbde"
var reverseStr = require('../../util/reverseStr');
function reverseParentheses(s) {
    var s1=" ";
    var s2=" ";
    var s3=" ";
    for(var i=0; i<s.length ; i++){
        var posb = s.lastIndexOf("(",posb-1);
        var pose = s.indexOf(")",posb+1);
        if(posb ==-1 && pose==-1){
            return s;
        }
        else {
            s1=s.slice(posb,pose+1);
            s2=s.slice(posb+1,pose);
            s3=reverseStr(s2);
            s=s.replace(s1,s3);
             }
    }
   }
module.exports=reverseParentheses;
