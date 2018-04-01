//HOW many brackets in str pp2
function searchBracket2(str){
    var count=0;
    for(var i=0;i<str.length;i++){
        var posb=str.indexOf("(",posb+1);
        if(posb==-1)
            break;
        else
        {
            count+=1;
        }
    }
       return count;
}
module.exports=searchBracket2;
