// console.log('Hello, Node.js!');
// console.log(process.argv);

// for(i = 0; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
// }

let c3=1;
let c5=1;
// let str="";
for( i=1;i<=16;i++) {
    let str="";
    if(c3===3){
        c3=0;
        str+='fizz '
    }
    if(c5===5){
        c5=0;
        str+='buzz '
    }
    if(str==='') { 
        str+=(i+' ');
    }
    c3++;
    c5++;
    console.log(str);
}
