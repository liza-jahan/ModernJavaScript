function log(anything){
    return console.log(anything);
}

// //Sets
// let mySet=new Set();
// mySet.add(5).add(7).add('Bangladesh').delete('Bangladesh');
// //log(mySet.has('Bangladesh'));
// //mySet.clear();
// log(mySet.size);
// log(mySet);



// //array to set

// let myArray=[1,2,3,4];
// //let mySet=new Set(myArray);
// let mySet=new Set('myArray');//iterable
// for(let value of mySet){
//     log(value);
// }
// //log(mySet);



//set to array
let myArray=[1,2,3,4];
let mySet=new Set(myArray);
log([...mySet]);//spred operator
//2 nd way
log(Array.from(mySet));


