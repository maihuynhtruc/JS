//input array, find the pair of adjacent elements that has the largest product and return that product
function  adjacentElementsProduct(inputArray){
    var tam= inputArray[0]* inputArray[1];
    var multi;
    for(var i=1; i<inputArray.length-1 ; i++)
    {
        multi = inputArray[i]* inputArray[i+1];
        if(multi >= tam) {
          tam = multi;
            console.log(tam + "t>tam");
        }
        else {

             tam = tam;
        }
    }
    return tam;
}
module.exports = adjacentElementsProduct;
