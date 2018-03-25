//str=("1230") -->sum=6
function sumStr(str) {
    var sum=0;
    for(var i=0;i<str.length;i++)
    {
        sum+=parseInt(str[i]);
    }
    return sum;
}
module.exports=sumStr;
