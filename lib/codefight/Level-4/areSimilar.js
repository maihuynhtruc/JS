//For a = [1, 2, 3] and b = [2, 1, 3], the output should be
//areSimilar(a, b) = true
var isSimilar=require('../../util/isSimilar');
function areSimilar(a,b){
    var temp=0;
    var c=[];
    var rs;
    for(var i=0;i< a.length; i++){
        if(a[i]==b[i])
        {
            continue;
        }
        else{
            temp+=1;
            c.push(a[i]);
            c.push(b[i]);
            if(temp==3){
                return false;
            }
            else continue;
        }}
    if((i==a.length) &&(temp==0))
        return true;
    else if(temp==1)
        return false;
    else if(temp==2)
    {
        rs=isSimilar(c);
    }
    return rs;
}
module.exports=areSimilar;
