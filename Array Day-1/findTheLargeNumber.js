let array = [1,3,2,2,7,8,3,5]
const findTheLargeNumber = (array) =>{
    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

console.log(findTheLargeNumber(array));