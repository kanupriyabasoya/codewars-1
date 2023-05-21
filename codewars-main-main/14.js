function sumMix(x){
    let sum = 0;
   x.map((num)=> {
       num = Number(num);
        sum += num;
    })
    return sum;
}

