export default function lastIndexOf(array,elem){
    for(let i = array.length - 1;i > -1;i--){
        
        if(array[i]===elem){
            return i
        }
    }
    return -1
}