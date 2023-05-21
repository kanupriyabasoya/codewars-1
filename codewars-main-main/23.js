//7 kyu
//digit*digit
function squareDigits(num){
    const array= String(num).split('')
   const newArray =[]
   array.map((element)=>{
    const result= Math.pow( Number(element),2);
    newArray.push(result);
   })
   return Number(newArray.join(''))
}

console.log(squareDigits(3212))  //81181 as 9^2=81 1^2=1