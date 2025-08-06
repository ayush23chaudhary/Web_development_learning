// async function main() {
//     return new Promise((resolve, reject) => resolve("Hello World!"))
// }

// console.log(main()) // Promise { 'Hello World!' }


// async function main() {
//     console.log(10);
//     console.log(20);
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(data);
//     console.log(30);
// }
// console.log(50);
// console.log(main()) // 
// console.log(60);



async function callAPI() {
    let data= await fetch("https://jsonplaceholder.typicode.com/posts");
    let resp= await data.json();
    console.log(resp);
}
callAPI();




// --------------------AXIOS----------------------

axios.get("https://jsonplaceholder.typicode.com/posts")
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
})

async function callAPI() {
    let data= await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(data.data);
}
callAPI();