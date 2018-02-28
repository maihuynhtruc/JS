function evenElement(a){
    var ar=[];
    for(var i=0; i<a.length ; i++)
    {
        if(i%2==0)
        {
            ar.push(a[i]);
        }
    }
    return ar;
}
module.exports=evenElement;
