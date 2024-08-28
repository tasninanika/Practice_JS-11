const arr1 = [2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11];

const combineArr = (array1, array2) =>{
    const newArr = [...arr1, ...arr2];
    const maxNum = Math.max(...newArr);
    return maxNum;
}

const result = combineArr(arr1, arr2);
console.log(result);