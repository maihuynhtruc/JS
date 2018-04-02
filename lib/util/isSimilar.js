function isSimilar(c){
    if(c[0]==c[2])
        return false;
    else if(c[0]==c[3]&& c[1]==c[2])
        return true;
    return false;
}
module.exports=isSimilar;
