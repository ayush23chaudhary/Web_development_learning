let btn= document.querySelector("button");

// btn.onclick=function(){
//     alert("Button clicked");
//     // alert(this.innerText);
//     // alert(btn.innerText);
// }

// -----------------------------------------------------------------------------------------------------------
function fun1(){
    console.log("Function 1 called");
    
}
function fun2(){
    console.log("Function 2 called");
    
}
btn.addEventListener("click",fun1);
btn.addEventListener("click",fun2);

// by adding event listener we can add multiple events to the same element