let array = [1,3,2,2,7,8,3,5]
const findTheSmallestelement = (array) =>{
    let smallest = array[0];
    for(let i=1; i<array.length; i++){
        if(array[i] < smallest){
            smallest = array[i];
        }
    }
    return smallest;
}

console.log(findTheSmallestelement(array));