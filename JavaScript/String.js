// we have three ways to declare string in js
    // 1) By using double quotes
    // 2) By using single quotes
    // 3) By using back ticks ``

    let a = window.prompt("Enter Your Name: ");
    console.log(`Your name is ${a}`);


    let str = "This is javaScript";
    let str1 = "         This is java";

   
    console.log(str.concat(str1.trimStart()));
    

    console.log((str.slice(8, str.length)));