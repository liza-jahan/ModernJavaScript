var numbers=[1,2,3,4,5,6,7,8];
var sum=numbers.reduce((prevValue,currentValue,currenIndex,arr)=>{
    return prevValue+currentValue;

},0);
console.log(sum);