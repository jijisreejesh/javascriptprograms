let prompt=require('prompt-sync')()
let n=prompt("Enter the limit : ")
let s=""
for(let i=0;i<n;i++){
    for(j=n;j>i;j--){
        s=s+"*"
    }
    console.log(s)
    s=""
}