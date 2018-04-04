//On each move you are allowed to increase exactly one of its element by one.
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input
//a= [1, 1, 1], the output should be arrayChange(a) = 3
function arrayChangePP2(a){
    var length=a.length;
    var move=0;
    var rs=0;
    for(var i=0; i<length; i++)
    {
        while(a[i+1]<=a[i])
        {
            move=a[i]-a[i+1]+1;
            rs+=move;
            a[i+1]+=move;
        }
    }
    return rs;
}
module.exports=arrayChangePP2;

