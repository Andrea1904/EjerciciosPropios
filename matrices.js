//const interface = { input: process.stdin, output: process.stdout }
//const readline = require("readline").createInterface(interface)[Symbol.asyncIterator]();
//const numbers = (await readline.next()).value
const numbers = "1,2,3/3,2,1";
const arreglo = numbers.split('/');

let arr1=[];
let arreglo2=[];
let r=[];


arr1=arreglo[0];
arr1=arr1.split(',');
console.log(arr1);

arreglo2=arreglo[1];
arreglo2=arreglo2.split(',');
console.log(arreglo2);

for(let i = 0; i < arr1.length; i++){
    r[i] =parseInt(arr1[i])+ parseInt(arreglo2[i]);
    console.log (arr1[i] + "---" + arreglo2[i]  + " =="+ r[i]);
}

console.log(r);

//console.log(arr3);
/*
arr1= arr[0];
arr2=arr[1];

let r=[];
/*

console.log(r);
/*
(async() => {
     // Read values in console
     let line1 = (await readline.next()).value
     let line2 = (await readline.next()).value

     // Print text in console
     console.log(line1)
     console.log(line2)
})();*/