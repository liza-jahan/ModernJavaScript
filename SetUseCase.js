function log(anything){
    return console.log(anything);
}

let myArray=[1,2,3,4,5,6,5,5,6,5];
log([...new Set(myArray)]);