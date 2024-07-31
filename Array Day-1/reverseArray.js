let array = [1,3,2,2,7,8,3,5]
const reverseArray = (array) =>{
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}
reverseArray(array);