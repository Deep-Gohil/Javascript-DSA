const findSum = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];

        if (sum === target) {
            return true;
        } 
        else if (sum < target) {
            i++;
        } 
        else {
            j--;
        }
    }
    return false;
}
let arr = [1, 2, 3, 4, 5];
let target = 9;
console.log(findSum(arr, target)); 