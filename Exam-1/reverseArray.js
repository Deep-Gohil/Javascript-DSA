let array = [10, 20, 30, 40]

const reverseArray = (array) =>{
    for(let i=array.length-1; i>=0;i--){
        console.log(array[i]);   
    }
}

reverseArray(array);