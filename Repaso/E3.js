function GetByIdx(arr, idx){
    if (idx>=0){
        if (idx <= arr.length-1){
            return arr[idx]
        }else{
            return "El array no contiene el indice"
        }
    } else{
        return "El indice no puede ser menor a 0"
    }
}

let resultado = GetByIdx([1,2,3,4,5], 4)
console.log(resultado)
