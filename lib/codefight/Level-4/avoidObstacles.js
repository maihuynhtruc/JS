//Find the minimal length of the jump enough to avoid all the obstacles.
function avoidObstacles(inputArray)
{
    var ar=inputArray.sort(sortNumber);
    var jump=1;
    var nextJump=0;
    var i=0;
    while(nextJump<=ar[ar.length-1]){  
        nextJump +=jump;      
        if(nextJump!=ar[i]){
            
            if(nextJump>ar[i]){
                nextJump -=jump; 
                i++;
            }
        }
        else
           {
               nextJump=0;
               i=0;
                jump++;
           }
    
    }
    return jump;
}
function sortNumber(a,b) {
    return a - b;
}
avoidObstacles([1, 4, 10, 6, 2])