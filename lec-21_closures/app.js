// function foo(){
//     var a=10;
//     var b=20;
//     function fun(){
//         console.log(a);
//         console.log(b);
//     }
//     fun();
// }
// foo();

// function foo(){
//     var a=10;
//     var b=20;
//     function fun(){
//         console.log(a);
//         console.log(b);
//     }
//      return fun();
// }
// let ret=foo();
// console.log(ret);
// ret();

// function outer(){
//     var a=10;
//     function inner(){
//         a++;
//         var b=20;
//         function innermost(){
//             a++;
//             b++;
//             console.log(b);
//         }
//         return innermost;
//     }
//     return inner;
// }
// let f1=outer(); //f1 ----------->inner
// let f11=f1(); //f11 -----------> innnermost
// f11();  12 21
// let f12=f1();
// f12(); 14 21
// ---------------------------------------------------------------------------------------------------------------------------

// MEMOIZATIONS

function getSecretKey(){
    let secret_var=0;
    function increase(){
        secret_var++;
        console.log(secret_var);

    }
    return increase;

}
let  get= getSecretKey();
get();
get();
