var numbers=[1,2,3,4,5,6];
var numbers1=[1,2,[3,100,500],4,5,6];

var [,a,,,b]=numbers;
var [,,[,x,y]]=numbers1;

console.log(a,b);
console.log(x,y);