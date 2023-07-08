var numbers=[1,2,3,3];
var numbers2=[4,5,6,7];
var a=[...numbers]; //exact copy of numbers
numbers.push(4);
console.log(a);
console.log(numbers);


//
var result=[...numbers,...numbers2];
console.log(result);


