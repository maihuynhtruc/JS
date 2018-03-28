//matrix, sum matrix,0 on top column, the other on same column is ~0
function matrixElementsSum(matrix){
    var  t=0;
    var l1=matrix.length;
    var l2=matrix[0].length;
    for(var i = 0; i < l2 ; i++)
    {
        for(var j=0 ; j< l1 ; j++){

            if((matrix[j][i]==0))
            {
                break;
            }
            else {
                t+=matrix[j][i];
            }
        }
    }
    return t;
}
module.exports = matrixElementsSum;
