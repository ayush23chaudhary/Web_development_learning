// let a=1==true;
// console.log(a);

// let b=10==="10";
// console.log(b);

// let number =prompt("enter your age");
// if(number<18){
//     console.log("bahar ja");
// }
// else if(number<25){
//     console.log("aaja");
// }
// else{
//     console.log("ruk ja 2min");
// }
// // -------------------------------------------------------------------------------



// //short circuiting: as far as result id decided further condition are not checked
// let marks=20;                //33
// if (marks>=33 && attndence>=75){
//     console.log("pappu paas")
// }
// else{
//     console.log("pappu cant paas")
//}
// error throw nhi karega because marks ki condition pehle hi fail ho gyi

// -----------------------------------------------------------------------------------------


// *****************loops*******************************
// for, while, do-while, for-in, for-of are 5 types of loops in JS

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// let i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// let i=10;
//  do {
//     console.log(i);
//     i--;
    
//  } while (i>0);

//-------------------------------------------------------------------------------------------------
// **********************************ARRAY****************************************************

let arr=[100, true, 300,"ayush",[2,5,8]];
console.log(arr[2]);
console.log(arr[4][1]);



// ################OBJECT#################################

let ayush={
    name:"ayuhs",
    class:12,
    age:20,
    gender:"male"
}

console.log(ayush);
console.log(ayush["gender"]);

console.log(ayush.gender);