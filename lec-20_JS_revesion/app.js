var a=10;
function fun(){
    console.log(a);
    var a=20;
    function fu(){
        a++;
        console.log(a);
        var a=30;
    }
    fu();
}
fun();



console.log(1+ +"6");
console.log(1=="1")     // true
console.log([]=='')     // true
console.log(0=="")     // true
console.log(0=="        ")     // true
console.log(""=="        ")   //false
console.log([]==[])           // false 

//pass by value = all primitive datatypes
//pass by reference = all non primitive datatypes


// difference btw undefined,not defined , NaN
// not a number(NaN) comes when a valid answr is not available
// undefined comes when a variable is declared but not assigned any value
// not defined comes when a variable is not declared at all
