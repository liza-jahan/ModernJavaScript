const language={
    name:'javaScript',
    creator:'Brendan Eich',
    library: {
        react:{
            company:'Facebook'
        }
    }
};
// let company=language && language.library && language.library.react && language.library.react.company;
// console.log(company);//simple way



//new feature
let company=language?.library?.react?.company;
console.log(company);
