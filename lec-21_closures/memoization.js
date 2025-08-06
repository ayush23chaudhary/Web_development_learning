function calc(){
    let arr=[];
    function multi5(a){
        if(arr[a]!=="undefined"){
            return arr[a];
        }else{
            let res=a*5;
            arr[a]=res;
            console.log(arr);
            return res;
        }
    }
}
let mul= calc();

console.log(multi(4));
console.log(multi(5));
console.log(multi(6));
console.log(multi(4));
