//Given a string, find out if its characters can be rearranged to form a palindrome.
function palindromeRearranging(inputString) {
	var arr=inputString.split("");
	var array= arr.sort();
	var countOdd = 0;
    var countCurrentChar = 0;
    var currentChar = array[0];

	for( var i=0; i<= array.length ;i++ )
	{
		if(array[i]!= currentChar){
			currentChar = array[i];
			if(countCurrentChar % 2 === 1){
				
				countOdd++;
			}
			countCurrentChar = 1;
		}else{
			countCurrentChar++;
		}	
	}
	if(countOdd>=2){
		console.log('false');
		return false;
	}
	 console.log('true');
	return true;
}

palindromeRearranging("aabb");
//module.exports=palindromeRearranging;
