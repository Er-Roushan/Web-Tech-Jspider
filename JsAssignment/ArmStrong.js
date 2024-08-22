const isArmstrongNumber = (number) => {
    
    const digits = number.toString().split('');

   
    const power = digits.length;

    
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);

    
    return sum === number;
}


const number = 153;
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}