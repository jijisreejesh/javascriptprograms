let prompt=require('prompt-sync')()
let n=prompt("Enter the limit : ")
let j,s="",m=1,d=parseInt(n)+(parseInt(n-1))
for(let i=0;i<n;i++){
    for(k=0;k<i;k++){
        s=s+" "
    }
    if(i==0||i==n-1)
    {
       
        for(j=0;j<d;j++)
        {
            s=s+"*"
        }
    }
    else
    {
        s=s+"*"
        for(j=0;j<d-2;j++)
        {
            s=s+" "
        }
        s=s+"*"
    }
    console.log(s)
    s="";
    d=d-2;
     m=m+2;
}