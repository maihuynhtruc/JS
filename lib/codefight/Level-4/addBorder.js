//Given a rectangular matrix of characters, add a border of asterisks(*) to it
function addBorder(picture){
    var a=[];
    var lRow=picture.length+2;
    var lCol=picture[0].length+2;
    for(var i=0; i<lRow;i++)
    {
        a[i]=[];
        for(var j=0;j<lCol;j++)
        {
            if(i==0||i==lRow-1||j==0||j==lCol-1)
            {      a[i]+="*";
            }
            else
            {
                a[i]+=picture[i-1][j-1];
            }
        }
    }
    return a;
}
module.exports = addBorder;

