let num = ['1','2','3','4','5','6','7','8','9','0'];
let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let specialChar = ['!','@','#','$','%','^','&','*'];

function genNum(max){
  return Math.floor(Math.random()*(max + 1));
}

function generatePassword(n, includeNumbers, includeSpecialChars){
  let temp, pass = "";
  let i = 0;
  if(includeNumbers == true) n--;
  if(includeSpecialChars == true) n--;
  
  while(i < n){
    temp = Math.floor(Math.random()*(char.length + 1));
    
    while(temp > 25){
      temp = genNum(25);
    }
    if(i == 0) pass += char[temp].toUpperCase();
    else pass += char[temp];
    i += 1;
  }
  
  if(includeSpecialChars == true) {
    temp = Math.floor(Math.random()*(specialChar.length + 1));
    while(temp > 7){
      temp = genNum(7);
    }
    pass += specialChar[temp];
  }
  
  if(includeNumbers == true) {
    temp = Math.floor(Math.random()*(num.length + 1));
    while(temp > 9){
      temp = genNum(9);
    }
    pass += num[temp];
  }
  
  return pass;
}

console.log(generatePassword(10, true, true));