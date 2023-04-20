function IsPalindrome(number) {
  var a,temp,reversed=0;
  temp=number;
  while(number>0)
  {
    a=number%10;
    number=(number-a)/10;
    reversed=reversed*10+a;

  }
  if (reversed==temp)
  {
    return true;
  }
  
  else{
    return false;
  }
} 
alert(IsPalindrome(prompt("eded daxil edin")));
