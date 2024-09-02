// we have three ways to declare string in js
    // 1) By using double quotes
    // 2) By using single quotes
    // 3) By using back ticks ``

    // let a = window.prompt("Enter Your Name: ");
    // console.log(`Your name is ${a}`);


    // let str = "This is javaScript";
    // let str1 = "         This is java";

   
    // console.log(str.concat(str1.trimStart()));
    

    // console.log((str.slice(8, str.length)));

//padStart() padEnd()
    let phno = "8677867330";
        
    console.log(phno.slice(4,8).padStart(7, "X").padEnd(10, "X"));
    console.log(phno.slice(0,4).padEnd(10, "X"));
    console.log(phno.slice(0,4).padEnd(6, "X") + phno.slice(6));
    console.log(phno.slice(0,4).padEnd(8, "X") + phno.slice(6));



    localStorage.setItem("data", "Roushan");
    localStorage.setItem("pwd", "1234");
    console.log(localStorage.getItem("data"));

    localStorage.removeItem("data");
    