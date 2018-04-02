function addBorderPP2(picture){
    var rs=[];
    lRow=picture.length;
    lCol=picture[0].length+2;
    for(var i=0; i<lRow ; i++)
    {
        picture[i]= "*" + picture[i] + "*" ;
    }
    for(var j=0; j<lCol ; j++)
    {
        rs+="*";
    }
    picture.unshift(rs);
    picture.push(rs);
    return picture;
}
module.exports=addBorderPP2;
