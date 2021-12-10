export default function includes(array,elem){
    for(let i = 0; i<array.length;i++){
        if(array[i] === elem){
            return true
        }
    }
    return false
}