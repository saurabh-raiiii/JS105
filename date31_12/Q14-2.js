let n = 3;

for(let i = 0; i < n; i++){
  if(i == 0 || i == n-1){
    let s = "";
    for(let j = 0; j < n; j++){
      s += "* ";
    }
    console.log(s);
  }
  else{
    console.log("*");
  }
}