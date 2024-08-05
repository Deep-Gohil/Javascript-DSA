let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let mergedArray = [];

const mergeShortedArray = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        mergedArray.push(arr2[j]);
    }
    for (let i = 0; i < mergedArray.length - 1; i++) {   
        if (mergedArray[i] > mergedArray[i + 1]) {
            let temp = mergedArray[i];
            mergedArray[i] = mergedArray[i + 1];
            mergedArray[i + 1] = temp;
            i = -1;
        }
    }
    return mergedArray;
}

mergeShortedArray(arr1, arr2);
console.log(mergedArray);
