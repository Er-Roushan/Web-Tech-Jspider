//anonymous func
let a = function (){
    console.log("Hello i'm am anonymous func");
}
a();
//named function

function webtech(){
    console.log("Hello i'm Named function.");
}

webtech();

//function with expression / functional expression / first class function

let ab = function java(){
    console.log("Hello i'm am functional expression");
}

// note: when we assigna a func to a variable, after assigning we can't call with it name, we can only call with variable function

ab();

//immediate invoking functional expression

(function sql(){
    console.log("Hello i'm IIFE Function.");
}())

//Note: IIFE called only one time

//Arrow function

let b = ()=> {
    console.log("i'm arrow function.");
}

b();

//implicite return using arrow fn

let c = (a, b) => a+b;
console.log(c(4,5));

let d = (f,g) => (f+g, console.log("hiiiiii"))
// let d = (f,g) => (console.log("hiiiiii"), f+g)
console.log(d(2,3));

//highorder funtion

function amount(){
    let ab = 3000;
    return ab;
}

function simpleIntrest(a){
    console.log(a);
    console.log(a());
}

simpleIntrest(amount);

//Nested function

function parent(){
    let a = 5;

    function child(){
        let b=6;

        function gChild(){
            let c= 9;
            console.log(a, b, c);
            
        }

        gChild();
    }

    child();
}

parent();



//call by functional currying
function fcparent(){
    let a = 5;

    function fcchild(){
        let b=6;

        function fcgChild(){
            let c= 9;
            console.log(a, b, c);
            
        }

       return fcgChild;
    }

   return  fcchild;
}



fcparent()()();

