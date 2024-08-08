let prompt=require('prompt-sync')()
let n=prompt("enter the limit : ")
for(let i=0;i<n;i++){
    let s=""
    if(i==0||i==n-1){
        for(let j=0;j<n;j++){
            s=s+"*"
        }
    }
    else{
        s="*"
        for(let j=1;j<n-1;j++){
            s=s+" "
        }
        s=s+"*"
    }
    console.log(s)
}
