 function boxBlur(array)
{
    var ar=[],result=[],rs=0,sum=0;
    for(var i=0;i<array.length-2;i++)
      { 
         for( var j=0; j< array[0].length-2; j++)
              { 
        sum+=(array[i][j]+array[i][j+1]+array[i][j+2]+array[i+1][j]+array[i+1][j+1]+array[i+1][j+2]+array[i+2][j]+array[i+2][j+1]+array[i+2][j+2]);
          result.push(Math.floor(sum/9));  
           sum=0;
        }
       }
      return [result];
}
boxBlur([[7,4,0,1], 
 [5,6,2,2], 
 [6,10,7,8], 
 [1,4,2,0]])