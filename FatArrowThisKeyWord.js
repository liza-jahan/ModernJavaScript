var javascript={
    name: "JavaScript",
    libraries:["React","Angular","Vue"],
   // printLibraries: function(){
     //var self=this;
       // this.libraries.forEach(function(a){
        //  console.log(`${self.name} loves ${a}`)  //forEach er jonno this kaj kora er jonno self a this keyword neya hoice

       // });
       printLibraries: function(){
       
        this.libraries.forEach((a)=> console.log(`${this.name} loves ${a}`)  );//fat arrow key
    },
};
javascript.printLibraries();