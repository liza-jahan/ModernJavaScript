const text='my favorite color are #FFFFFF and #000000';
const regex=/#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;
const matches=text.match(regex);
console.log(matches);

const matcheAll=text.matchAll(regex);
for(let match of matcheAll){
console.log(matches);
}