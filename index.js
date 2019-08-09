
let somevar = 'hello';
console.log(Boolean(somevar));

function foo(){
    if(!somevar){
        console.log('null change to true')
    }
};

foo();