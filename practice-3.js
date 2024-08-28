 const arr = [2, 3, 4, 5, 6];

const avgFun = (numbers) =>{
    let sum = 0;
    for(const num of arr){
        const sqr = Math.pow(num, 2);
        sum += sqr;
    }
    const avg = sum / arr.length;
    return avg;
}

const result = avgFun(arr);
console.log(result);