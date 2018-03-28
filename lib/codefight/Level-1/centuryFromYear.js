//The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200
//input year, return century
function centuryFromYear(year){
    var t=year%100;
    var rs=1;
    if(year<=100)
        return rs;
    else {
        if(t==0)
            rs=Math.round(year/100);
        else
        if(t>=50)
            rs=Math.round(year/100);
        else
            rs=Math.round(year/100)+1;
    }
    console.log(rs);
    return rs;
}
module.exports=centuryFromYear;
