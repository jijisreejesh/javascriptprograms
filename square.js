// let prompt=require('prompt-sync')()
// let n=prompt("enter the limit : ")
// for(let i=0;i<n;i++){
//    for(j=0;j<n;j++){
//     console.log('*')
//    }
//    console.log("\n")
// }

let prompt=require('prompt-sync')()
let n=prompt("enter the limit : ")
let x=""
for(let i=0;i<n;i++){
   for(j=0;j<n;j++){
    x=x+"*"
   }
   console.log(x)
   x=""
}