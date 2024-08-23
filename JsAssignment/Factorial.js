var number  = prompt("Enter a number to get it's factorial:");

var fact = 1;

if(number == 0 ){

    console.log(`The factorila of ${number} is 1`);

}else if(number < 0){
    console.log("The factorial of -ve numbers is not possible");

}else {
    for(var i  = 1; i <= number; i++){
        fact = fact * i;
    }
    console.log(`The factorila of ${number} is ${fact}`);
    
}