function modifier(strings,...values){
    const m=strings.reduce((prev,current)=>
    {
return prev+current+(values.length ?"Mr. "+values.shift(): "")
    },"");
    return m;
    
     
    // console.log(strings);
    // console.log(values);


}


var player1="Shakib";
var player2="Tamim";

console.log( modifier`we have ${player1} and ${player2} in our cricket team`);