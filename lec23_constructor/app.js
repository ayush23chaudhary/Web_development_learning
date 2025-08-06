// function sam(name,num){

//     this.username =name;
//     this.mob = num;
//     this.greet=function(){
//         console.log("hello");
//     }
// }

// let p1 =new sam("Ayush",2466);
// let p2= new sam("sam",142535);
// console.log(p1);
// console.log(p2)

function Person(naam,umar,rang){
    this.name=naam;
    this.aga=umar;
    this.favcolor=rang;
}

let p1= new  Person("Ayush",20,"pink");
let p2= new  Person("aksh",21,"huine");
console.log(p1);
console.log(p2);


// ------------------------------------------------------------------------------------------------------

class Person2{
    constructor(naam,umar,rang){
        this.name=naam;
        this.aga=umar;
        this.favcolor=rang;
    }
    greet(){
        console.log("Good Morning");
    }
}

let p3= new  Person("Ayush",20,"pink");
let p4= new  Person("Akshat",21,"huine");
console.log(p4);
console.log(p3);



// ___________________________________________________________________________________
class Student extends Person2{
    constructor(naam,umar,rang,roll){
        super(naam,umar,rang);
        this.roll_no=roll;
    }
}