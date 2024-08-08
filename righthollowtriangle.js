let prompt=require('prompt-sync')()
let n=prompt("Enter a value")
let i,j,s=""
for(i=0;i<n;i++)
{
    if(i==0||i==n-1){
        for(j=0;j<=i;j++)
        {
         s+="*"     
        }
    }
   else{
        s=s+"*"
        for(j=1;j<i;j++)
        {
            s=s+" "
        }
        s=s+"*"
    }
    console.log(s)
    s=""
}