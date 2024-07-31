let array = [1,3,2,2,7,8,3,5,2]
let target = 2
count = 0
const  occurrences = (array,target) =>{
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            count++;
        }
    }
    console.log(count);
}

occurrences(array, target);