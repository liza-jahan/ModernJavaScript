const user={
    id:223,
    name:"sakib",
    age: 23,
    education:{
        degree:"Bsc",
    },
};
const {
    education:{degree},
}=user;
console.log(degree);