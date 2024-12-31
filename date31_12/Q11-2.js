let arr = [[1,2],[3,4],[5,6]];
let n = 3, m = 2;
for(let i = 0 ; i< n; i++){
  let s = "";
  for(let j =0; j < m; j++){
    s += arr[i][j] + " ";
  }
  console.log(s);
}