// let prompt=require('prompt-sync')()
// let a=prompt("enter first number : ");
// let b=prompt("enter second number : ");
// let c=prompt("enter third number : ");
// if( (a>b) && (a>c))
//     console.log('Largest number :',a);
// else if( (b>a) && (b>c))
//     console.log('Largest number :',b);
// else if((c>a)&&(c>b))
// console.log('Largest number :',c);

let prompt=require('prompt-sync')()
let a=10,b=300,c=60;
if( (a>b && a>c))
    console.log('Largest number :',a);
else if( (b>a && b>c))
    console.log('Largest number :',b);
else 
console.log('Largest number :',c);
