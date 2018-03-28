//got statues of different sizes,each statue having an non-negative integer size
// arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1,
// figure out the minimum number of additional statues needed.
function makeArrayConsecutive2(statues) {
    var min = statues[0];
    var max = statues[0];
    var sum, m;
    for( var i = 1; i < statues.length ; i++)
    {

        if(min < statues[i]) {
            min = min;
        }
        else{
            min = statues[i];
        }
        if(max > statues[i])
        {
            max=max;
        }
        else{
            max=statues[i];
        }
    }
    sum=max - min + 1;
    m= sum - statues.length;
    return m;
}
module.exports = makeArrayConsecutive2;
