const promise1=new Promise(resolve=>resolve('L'));
const promise2=new Promise((_,reject)=>reject('M'));
const promise3=new Promise(resolve=>resolve('R'));


//old way
// Promise.all([promise1,promise2,promise3])
// .then(Response =>console.log(Response))
// .catch(error =>console.log(error));


//new 
Promise.allSettled([promise1,promise2,promise3])
.then(Response=>console.log(Response));