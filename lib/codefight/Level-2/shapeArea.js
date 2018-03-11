//Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n
function shapeArea(n){
    if(n===1)
     return 1;
    if(n===2)
     return 5;
    return (2*(shapeArea(n-1)))- shapeArea(n-2)+4;
}
module.exports = shapeArea;