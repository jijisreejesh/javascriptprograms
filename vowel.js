let prompt=require('prompt-sync')()
let a=prompt("enter the alphabet : ");
if(a=='a'||a=='A'||a=='e'||a=='E'||a=='i'||a=='I'||a=='o'||a=='O'||a=='u'||a=='U'){
    console.log("Vowel");
}
else
    console.log("Consonent");
// switch(a){
//         case 'a':
//         console.log("Vowel");break;
//         case 'e':
//         console.log("Vowel");break;
//         case 'i':
//         console.log("Vowel");break;
//         case 'o':
//         console.log("Vowel");break;
//         case 'u':
//         console.log("Vowel");break;
//         default:
//         console.log("Conconent");break;
//     }
