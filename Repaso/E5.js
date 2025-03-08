let array = [2, 5, 7, 15, -5, -100, 55, 3, 76, -250, 0];
console.log(array)
function GetMenorMayor(arr){
    let NewArray = [0,0];
    for (let Mayor of arr){
        if (Mayor > NewArray[0]){
            NewArray[0]=Mayor
        }
    }
    i=0
    for (let Menor of arr){
        if (Menor < NewArray[1]){
            NewArray[1]=Menor
        }
    }
    return NewArray;
}

let Numeros = GetMenorMayor(array)
console.log(Numeros)