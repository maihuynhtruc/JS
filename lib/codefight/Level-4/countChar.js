// dem ky tu duoc cho trong array
function countChar(str,char){
    var count=0;
   
    for(i=0; i<str.length;i++)
    { 
       if(str[i]==char)
       {
            count++;
       }
           

    }
   return count;
}
countChar(['b','a','a','c','d'],'a');
