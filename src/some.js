export default function some(array,callback){
    if(array.length==0){
        return false
    }
    for(let i=0;i<array.length;i++){
        if(callback(array[i])){
            return true
        }
    }
    return false
}