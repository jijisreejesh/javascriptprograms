let prompt=require('prompt-sync')()
let a=prompt("enter the year : ")
if( ((a%4)==0) || ((a%400)==0))
    console.log('Leap Year');
else
    console.log('Not Leap Year');

