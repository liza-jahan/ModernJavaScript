//(async function() { 
// const {add} =await import('./Utill.js');
// const {remove} =await import('./Utill.js');
// add();
// remove();})();

import('./Utill.js')
     .then(({add,remove})=>{
        add();
        remove();
     });