
//name hifsa akram
//reg sp20-bse-025
/*question no 1
let arr_a =[0,1,2,3,4,5,6,7,9,10];
arr_a.map(squareX);
let arr2= arr_a.map(squareX)
function squareX(n) {
    return n**2 ;
}
console.log(arr2);   

arr_a.map(cube);
let arr3= arr_a.map(cube)
function cube(n) {
    return n**3 ;
}
console.log(arr3); 

//question no.2

let str="23618";
let arr= Array.from(str);
console.log(arr);

let res= arr.reduce(reduce_func)
function reduce_func(previous , current) {
    return previous+current;
}
console.log(res);

//task 3
let arr1=[2,3,6,1,7];
sum=0;
let arr4=arr1.filter(ff);

    function ff(n) {
        for(a=1;a<=n;a++){

       
        if(n%2==0){
            return n;
        }
        sum=sum+a;
    }

    }
    console.log(arr4);

    //task 4
 const sort_letter=function(letter){
        const strr=letter.split('').sort().join("");
        return strr;
      }

      console.log(sort_letter("comsat"));

    task 5
    let h=parseInt(prompt("enter value"))
    let hz=Math.random()*10;
    if(h==hz){
        console.log("win");
    }
    else{
        console.log("lose");
    }



    //task 6
   
    const check_equal=function(arrr){
        const last=arrr.length-1;
        if(arrr.length>=1){
            return arrr[0]==arrr[last];
        }
        return false;
    }
    const ar=[11,35,33,55,11];
    console.log(check_equal(ar));
    *

      ///////task 7
     let k="23617";
     let zh=k.charAt(k.length-4)
     console.log(zh);
     
    ///task 8
let strr = prompt("Enter number or alphabet","");

if(isNaN(strr))
{
strr = strr.toUpperCase();
for(var i = 0; i < strr.length; i++) {
var chr = strr.charAt(i);
if(chr == 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U')break;
}
if( i < strr.length )
alert("The position of first vowel is "+(i+1));
else
alert("No vowel found in this statement");
}

else
{
var num,rev=0,remainder;
num = parseInt(strr);
while(num!=0) {
remainder = num%10;
num = parseInt(num/10);
rev = rev * 10 + remainder;
}
alert("Reverse of "+strr+" is "+rev);
}
*/



    




