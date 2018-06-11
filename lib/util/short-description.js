
function shortDescription(array) {
	var keyword=["Mua dầu gấc giá rẻ tphcm","Mua dầu gấc thiên nhiên giá rẻ","Bán dầu gấc nguyên chất giá gốc"];
	var tacdung=["dùng dầu gấc nguyên chất giúp ngăn ngừa ưng thư, chống lão hóa, bổ mắt, hạn chế suy dinh dưỡng"
	,"tác dụng dầu gấc đối với mắt, rất tốt cho trẻ em, đẹp da",
	"dùng dầu gấc nguyên chất giúp ngăn ngừa rạn da, tăng cường sức đề kháng cho trẻ"];
	var lienhe=[0918327819];
	var gia=[50000, 30000, 15000];
	
for( var i = 0; i < keyword.length; i++ ) {
var newarray= keyword[Math.floor(Math.random()*keyword.length)] +", "+ tacdung[Math.floor(Math.random()*tacdung.length)]+", LH:" 
+ lienhe + ", giá:"+ gia[Math.floor(Math.random()*gia.length)];
 }
console.log(newarray);
return newarray;
}
shortDescription();
