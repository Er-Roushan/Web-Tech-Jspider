// let arr = [10, 20, "Roushan", true, [4,5], {username:"Roushan"}];
// console.log(arr);
// arr.push(78,90,233);
// console.log(arr);
// arr.pop();
// arr.unshift(101,102);
// console.log(arr);


let arr1 = [10,20,30,40,50,60,70,80];

console.log(arr1);
console.log(arr1.join(" "));
arr1.forEach((ele,i,arr)=> {

        console.log(ele);

})

let result = arr1.map((ele, i, arr) => {
    return ele+5;
})

// console.log(result);

let filteredarr=arr1.filter((ele,i,arr)=>{
    return ele>40;
})

// console.log(filteredarr);


let findarr = arr1.find((ele, i, arr)=> {
    return ele>40;
})

// console.log(findarr)


let queresult = arr1.filter((ele, i, arr) => ele>=0).reduce((a,b) => a+b);

console.log(queresult);