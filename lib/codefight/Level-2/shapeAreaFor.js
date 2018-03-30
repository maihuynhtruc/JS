//dung for: Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n

function shapeAreaFor(n){
    var a=1;
    var b=5;
    var c;
    if(n===1)
        return 1;
    if(n===2)
        return 5;
    for( var i=3; i<=n; i++)
    {
        c= (2*b) - a +4;
        a=b;
        b=c;
    }
    return c;
}
module.exports =shapeAreaFor;
