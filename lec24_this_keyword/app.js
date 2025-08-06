// function calling




let obj={
    a:10,
    fun:function(){
        console.log(this,"1"); //obj
        function ans(){
            console.log(this,"2"); //window
        }
        ans();
    }
        
}
obj.fun();

// -----------------------------------------Constructor calllig---------------------------------------------------------------

function Sam(name){
    this.name=name;
    this.kaam="udhambaazi";

}
let p1= new Sam("Ayush");
let p2= new Sam("Chaudhary");


// _______________________________________________________________________________________________________
let obj1={
    a:10,
    fn:function(x,y,z){
        console.log(this.a,x,y,z);
    }
}
let obj2={
    a:50
}

obj1.fn.call(obj2,10,20,30);
obj1.fn.apply(obj2,[10,20,20]);
// bind creates a copy of obj
  let fncopy= obj1.fn.bind(obj2,10,20,30);
  fncopy()

//   ______________________________________Arrow_________________________________________________


// // type 1
// let sqr= (x)=>{
//     return x*x;
// }
// console.log(sqr(7));

// type 2
// let sqr = (x)=> x*x;
// console.log(sqr(7));

// type 3
let sqr =x=>x*x;
console.log(sqr(8));