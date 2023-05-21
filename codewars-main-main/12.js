function sumArray(array){
  
  if(array==null|| array==[]){
    return 0;
  }
  else {
    const maxNum = array.indexOf(Math.max.apply(null,array));
    array.splice(maxNum,1);
    const minNum = array.indexOf(Math.min.apply(null,array));
    array.splice(minNum,1);
  const sum =  array.reduce(((acc,cv)=>acc+cv),0)
  return sum;
    }
 
}

