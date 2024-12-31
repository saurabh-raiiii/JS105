let arr = [[1,2,3],[4,5,6],[7,8,9]];

let n = arr.length;
let m = arr[0].length;

if(n == 1){
  for(let i = 0;i < m; i++){
    s += arr[0][i] + " ";
  }
  console.log(s);
}
else if(m == 1){
  for(let i = 0; i < n; i++){
    s += arr[i][0];
  }
  console.log(s);
}
else{
  let i = n - 1, j = 0, s = "";
  for(; i >= 0; i--){
    s += arr[i][j] + " ";
  }
  i = 0;
  j = 1;
  for(; j < m; j++){
    s += arr[i][j] + " ";
  }
  i += 1;
  j = m - 1;
  for(; i < n; i++){
    s += arr[i][j] + " ";
  }
  i = n - 1;
  j = m - 2;
  for(; j > 0; j--){
    s += arr[i][j] + " ";
  }
  console.log(s);
}