//find the number of common characters between them.
//s1 = "aabcc" and s2 = "adcaa", the output should be
//commonCharacterCount(s1, s2) = 3.
//3 common characters - 2 "a"s and 1 "c"
function commonCharacterCount(s1,s2){
    var l1= s1.length;
    var l2= s2.length;
    var result=0;
    s2=Object.assign([],s2);
    for(var i=0; i<l1; i++)
    {
        for(var j=0 ; j<l2; j++)
        {
            if(s1[i]==s2[j])
            {
                result+=1;
                s2.splice(j,1);
                l2=s2.length;
                break;
            }
        }
    }
    return result;
}
module.exports= commonCharacterCount;
