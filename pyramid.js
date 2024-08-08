let prompt=require('prompt-sync')()
let n=prompt("Enter the limit : ")
let j,s="",d=0
for(let i=0;i<n;i++){
    for(j=n-1;j>i;j--){
        s=s+" "
    }
    for(k=0;k<=d;k++){
        s=s+"*"
    }
    d+=2;
    console.log(s)
    s=""
}