//innerText can read the css whereas textContent is brainless and canot read the  content
let h2=document.querySelector('h2');
console.log(h2.innerText);    //getter

h2.innerText="mai hun gian";
console.log(h2.textContent);//setter

// innnertext and tetContent s both getter and setter which means that it can both get text fro html and can give the text 


