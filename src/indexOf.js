
export default function indexOf(array,elem){
    
    for(let i=0;i<array.length;i++){
       
     
        if(array[i]===elem){
            return i
        }
    }
    return -1
}

