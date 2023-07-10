function log(anything){
    return console.log(anything);
}
//weak set a only object add kora jay
//aita iterable na set er moto
//const ws=new WeakSet([{a: 1},{b: 2}]);
//ws.add({a: 2});
//log(ws);



//weak set usecase
const ws=new WeakSet();
class SomeClass{
    constructor(){
//ws.add(this)
    }
    method(){
        //if(!ws.has(this)){
          //  throw new error('you cannot access this method');
       // }

//else{ 
 return 'i am method';
 //   }
    }
}
// const a=new SomeClass();
// a.method();

log(SomeClass.prototype.method());
