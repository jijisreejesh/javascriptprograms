let prompt=require('prompt-sync')()
let n=prompt("Enter the limit : ")
let j,s="",d=1
for(let i=0;i<n;i++){
    for(j=n-1;j>i;j--){
        s=s+" "
    }
   if(i==0||i==n-1){
    if(i==n-1){
        d+=2;
    }
        for(j=0;j<d;j++)
            s=s+"*"
   }
   else{
        s=s+"*"
        for(k=0;k<d;k++){
            s=s+" "
        }
        s=s+"*"
        d=d+2;
   }
    console.log(s)
    s="";
}