function squareSum(numbers){
    return numbers.reduce((acc,val) => (val * val) + acc, 0);
    }