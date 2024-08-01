const removeDuplicates = (arr) => {
    if (arr.length === 0) {
        return 0
    }

    let i = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i]) {
            i++;
            arr[i] = arr[i];
        }
    }
    return i + 1;
}

const arr = [1, 1, 2];
const duplicate = removeDuplicates(arr);
console.log(duplicate);