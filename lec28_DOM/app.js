//1.
let allH1= document.getElementsByTagName("h1");
console.log(allH1); //HTMLCollection(2) [h1, h1]

allH1[1].style.color="red"; //change color of second h1
allH1[1].style.fontSize="50px"; //change font size of second h1
allH1[1].style.fontFamily="Arial"; //change font family of second h1
allH1[1].style.textAlign="center"; //change text align of second h1
allH1[1].style.backgroundColor="yellow"; //change background color of second h1
allH1[1].style.padding="10px"; //change padding of second h1

//2.
let idd= document.getElementById("vohra"); //get element by id
console.log(idd); //<h1 id="vohra">Vohra</h1
idd.style.color="blue"; //change color of idd
idd.style.fontSize="50px"; //change font size of idd
idd.style.fontFamily="Arial"; //change font family of idd
idd.style.textAlign="center"; //change text align of idd
idd.style.backgroundColor="yellow"; //change background color of idd

idd.style.cssText=`
    color:green;
    font-size:50px;
    font-family:Arial;
    text-align:center;
    background-color:pink;
    padding:10px;
`;

//3.
let allP= document.getElementsByClassName("ayush"); //get element by class name
// allP[0].style.cssText=`
// color:blue;
// font-size:50px;
// font-family:Arial;
// text-align:center;
// background-color:yellow;
// padding:10px;
// `;
// allP[1].style.cssText=`
// color:blue;
// font-size:50px;
// font-family:Arial;
// text-align:center;
// background-color:yellow;
// padding:10px;
// `;

for(let i=0;i<allP.length;i++){
    allP[i].style.cssText=`
    color:blue;
    font-size:50px;
    font-family:Arial;
    text-align:center;
    background-color:yellow;
    padding:10px;
`;
}

//4.
// let allP2= document.querySelector("h2"); //get element by query selector all
// document.querySelector("#vohra") ; //get element by id
// document.querySelector(".ayush") ; //get element by class name
// document.querySelector("h1") ; //get element by tag name

//5.

document.querySelectorAll("h1"); //get element by query selector all
// document.querySelectorAll("#vohra") ; //get element by id
// document.querySelectorAll(".ayush") ; //get element by class name
// document.querySelectorAll("h2") ; //get element by tag name