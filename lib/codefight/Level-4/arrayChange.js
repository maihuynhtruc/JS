//On each move you are allowed to increase exactly one of its element by one.
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input
//a= [1, 1, 1], the output should be arrayChange(a) = 3
function arrayChange(a){
    var length=a.length;
    var rs=0;
    for(var i=0; i<length; i++)
    {
        while(a[i+1]<=a[i])
        {
            rs+=1;
            a[i+1]+=1;
        }
    }
 return rs;
}
module.exports=arrayChange;
