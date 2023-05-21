//kata 6
//  Count characters in your string
function count(string){
const stringArray= string.split('') // ['k','a','n','a'] split the string in array to use array method
const obj = {} //created an object in which strings will be added as key
const result = stringArray.forEach(element => {
    if(obj[element]){
        obj[element]++
    }else{
        obj[element] = 1
    }
    console.log(obj)
});
   
   
}

count("kana") // {k:1, a:2, n:1}