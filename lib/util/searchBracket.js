//HOW many brackets in str
function searchBracket(str){
    var count=0;
       for(var i=0;i<str.length;i++){
        var posb=str.indexOf("(");
        if(posb==-1)
            continue;
        else
        {
            count+=1;
            str=str.slice(posb+1);
        }
    }
      return count;
}
module.exports=searchBracket;
