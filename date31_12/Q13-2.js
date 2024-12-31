let arr = [[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]]

let n = 3, m = 2;
let line = 0, s = "";
for(let i = 0; i < arr.length; i++){
  if(i % 2 == 0){
    let j = arr[i].length - 1;
    for(;j >= 0; j--){
      s += arr[i][j] + " ";
    }
  }
  else{
    let j = 0;
    for(;j < arr[i].length; j++){
      s += arr[i][j] + " ";
    }
  }
}

console.log(s);