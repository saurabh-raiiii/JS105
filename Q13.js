let arr = [35, 88, 93, 42, 76, 29, 58, 94, 47, 39];
let n = arr.length;

function manageScore(arr) {
    
    let i = 0;
    let ans = 0;
    
    while(i < n){
        if (arr[i] < 40) {
            arr[i] += 20;
        }
        if (arr[i] > 90) {
            arr[i] = 90;
        }
        if (arr[i] >= 50) {
            ans += 1;
        }
        i += 1;
    }

    console.log("new score:", arr);
    console.log("student passed:", ans);
}

manageScore(arr);
