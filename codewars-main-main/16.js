function doubleChar(str){
    let sum = '';
    let s = '';
    for(let i=0; i < str.length;i++){
        s = str[i];
        sum += s + str[i];
    }
    return sum;
}
console.log(doubleChar('kanu'));