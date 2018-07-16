const fs = require('fs');
const lienhe = "0918327819";
function shortDescription(data) {
	var results= [];	
	for( var i = 0; i < data.variants.length; i++ ) {
	var newarray= data.keyword[Math.floor(Math.random()*data.keyword.length)] +", "+ data.tacdung[Math.floor(Math.random()*data.tacdung.length)]+", LH:" 
	+ lienhe + ", giá:"+ data.variants[i].price;
		console.log(newarray);
		results.push(newarray);
	 }
	var output= "dauGac.txt";
	fs.writeFile(output, results.join("\r\n"), function(err) {
        if(err) {
            return console.log(err, output);
        }
        console.log("Generate Mixin File", output);
    });
	return results;
}
var dauGac={ 
	variants :[
		{
			"key": "dau-gac",
			price: "50000",
		},
		{
			"key": "dau-gac1",
			price: "500002",
		},
		{
			"key": "dau-gac2",
			price: "500003",
		},
		{
			"key": "dau-gac",
			price: "50000",
		},
		{
			"key": "dau-gac1",
			price: "500002",
		},
		{
			"key": "dau-gac2",
			price: "500003",
		},
		{
			"key": "dau-gac",
			price: "50000",
		},
		{
			"key": "dau-gac1",
			price: "500002",
		},
		{
			"key": "dau-gac2",
			price: "500003",
		}
	],
	keyword: [
		"Mua dầu gấc giá rẻ nhất tphcm",
		"Mua dầu gấc thiên nhiên giá rẻ",
		"Bán dầu gấc nguyên chất giá gốc",
	],
	tacdung: [
		"dùng dầu gấc nguyên chất giúp ngăn ngừa ưng thư, chống lão hóa, bổ mắt, hạn chế suy dinh dưỡng",
		"ai cũng quan tâm vì tác dụng dầu gấc đối với mắt, rất tốt cho trẻ em, đẹp da",
		"dùng dầu gấc nguyên chất giúp ngăn ngừa rạn da, tăng cường sức đề kháng cho trẻ"
	]
};
shortDescription(dauGac);
