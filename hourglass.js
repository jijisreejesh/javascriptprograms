let prompt=require('prompt-sync')()
let n=prompt("Enter the number: ")
let j,s,d,flag=0;
s="";
d=parseInt(n)+parseInt(n-1)
for(let i=0;i<n;i++)
    {
        for(j=0;j<i;j++)
         {
                s=s+" "
        }
        for(k=0;k<d;k++)
         {
                s=s+"*"
         }
    
   
    d-=2;
    console.log(s)
    s=""
}

s="",d=2
for(let i=1;i<n;i++){
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