const arr = [2, 3, 4, 5, 6];

const avgFun = (numbers) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        const squareArr = Math.pow(arr[i], 2);
        sum += squareArr;
    }
    const avg = sum / arr.length;
    return avg;
}

const result = avgFun(arr);
console.log(result);