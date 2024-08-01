const moveZeroes = (arr) =>{
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[zero];
            arr[zero] = arr[i];
            arr[i] = temp;
            zero++;
        }
    }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);