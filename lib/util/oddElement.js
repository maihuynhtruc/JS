function oddElement(a) {
    var ar=[];
    for(var i=0; i<a.length; i++)
    {
        if(i%2==0) {
           continue;
        }
        else{
            ar.push(a[i]);
        }
    }
    return ar;
}
module.exports = oddElement;
