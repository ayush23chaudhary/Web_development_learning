let arr=[10,20,30,40,50];
// arr.forEach(function(){})
arr.forEach(function(item,index){
    console.log(item*item);
});

// MAP method
let ret =arr.map(function(item,index){
    console.log(item);
    return item+index;
    
});
console.log(ret);


//FILTER METHOD
let arra=[10,20,25,35,40,50];
let reti= arra.filter(function(item,index){
    if(item%10==0){
        return item;
    }
})
console.log(reti);

// TEST
let list=[1,2,3,4,5,6,7,8,9];
let listy= list.map(function(item,index){
    return item*2;
}).filter(function(item,index){
    if(item>10){
        return (item);
    }
});
console.log(listy);