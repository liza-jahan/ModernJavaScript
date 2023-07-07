class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    test(){
        console.log("hello");
    }
 //   exampleFunction(){
      //  let array=[1,2,3];
     //   array.find(function(){
        //    this.test();
       // },this);// ai this ta bahir er

      // arrrow function
      exampleFunction(){
        let array=[1,2,3];
        array.find(() =>{
            this.test();
        });
        
        
    }
}
let student=new Student("sumit",32);
student.exampleFunction();
