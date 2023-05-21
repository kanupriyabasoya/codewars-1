function getSum(n1,n2){
    let result = 0;
    const array2=[];
    const array = [n1,n2];
    array.sort((a,b)=>{
        return a-b;
    });
    let[a1,a2]=array;
    let a3= a2-a1;
    for(let i=0;i<=a3;i++){
         array2.push(a1++);
    }
    for(let arr of array2){
        result +=arr;
    }
    return result;
  }

    
    