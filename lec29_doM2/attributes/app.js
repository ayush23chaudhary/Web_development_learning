let a=document.querySelector('a');
console.log(a.getAttribute('href')); // get attribute

console.log(a.setAttribute('href','http://github.com'));

// corousel


let img=document.querySelector('img');
let images=['https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1502790671504-542ad42d5189?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D','https://images.unsplash.com/photo-1517690623533-ca77a9a4b402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8','https://plus.unsplash.com/premium_photo-1687105821524-00ca65746337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8']
let i=0;
let idd=setInterval(function(){
    img.setAttribute('src',images[i]);
    i++;
    if(i==images.length){
        i=0;
    }
},2000);
setTimeout(function(){
    clearInterval(idd); 

},300000);