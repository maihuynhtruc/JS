//For a = [50, 60, 60, 45, 70], the output should be
//alternatingSums(a) = [180, 105].
function alternatingSums(a){
    var ar=[];
    var sumc=0, suml=0;
    var l=a.length;
    for(var i=0; i< l; i++)
    {
        if(i%2==0)
        {
            sumc+=a[i];
        }
        else{
            suml+=a[i];
        }
    }
    ar.push(sumc);
    ar.push(suml);
    return ar;
}
module.exports = alternatingSums;
