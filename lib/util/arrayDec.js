function arrayDec(array){
    var l= array.length;
    if(l==1)
        return true;
    else{
        for(var i=0; i< l-1; i++){
            if(array[i]>array[i+1])
                continue;
            else
                return false;
        }
        return true;
    }

}
module.exports = arrayDec;