HOISTING: when you try to access a variable or function before its declaration /
It is a default behaviour of JS, where all the declaration are moved to top their scope

general hoisting :when we use declarative as "var" we get output as "undefined"

Dead temporal zone(DTZ):when we use declarative as "let" and "const" we get output as "cannot access variablle before intialisation " error

----------x-----------------------------------------x-----------------------------------------x----------------

Scope: accessability of a function
TYPES OF SCOPE
global      script
functional  block

case 1- kya var {} ke andar h
    not: global, script
        case1.1= which declarative is used
            var--- global
            let/const----script
    yes: block, function, global
        case1.2= {} function ki wajah se h

                no: var----global
                    let/const--- block
                
                yes: var----function
                     let/const---block