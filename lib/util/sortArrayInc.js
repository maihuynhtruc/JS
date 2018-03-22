//give array,sort array increase sequence
function sortArrayInc(array){
    var tam= 0;
    for(var i=0 ; i< array.length ; i++){
        for(var j=i+1; j< array.length; j++) {
            if (array[i] < array[j]) {
                continue;
            }
            else {
                tam = array[i];
                array[i] = array[j];
                array[j] = tam;
            }
        }
    }
    return array;
}
module.exports = sortArrayInc;
