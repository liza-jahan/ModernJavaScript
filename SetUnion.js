function log(anything){
    return console.log(anything);
}

//sets
let a=new Set([1,2,3]);
let b=new Set([4,3,6]);

let  union =new Set([...a,...b]);
log(union);


let intersection=new Set([...a].filter(x=>b.has(x)));
log (intersection);

let difference=  new Set([...a].filter(x=>!b.has(x)));
log(difference);