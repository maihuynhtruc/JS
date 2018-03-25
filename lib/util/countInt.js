//count n=1230 -->count=4 , n=239017 --> count=6
function countInt(n){
    var count=1;
    while(Math.floor(n/10)!=0){
        count+=1;
        n=Math.floor(n/10);
    }
    return count;
}
module.exports = countInt;
