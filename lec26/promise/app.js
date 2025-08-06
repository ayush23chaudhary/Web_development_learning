// let p1=new Promise(function(resolve, reject) {
//     let data = "10 rupee"
//     let err= "chala jaa bsdk"
//     // resolve(data)
//     reject(err)
// })    

// p1
// .then(function(d){
//     console.log(d);
// })
// .catch(function(err){
//     console.log(err)
// })
// .finally(function(){
//     console.log("mai har case me chalunga")
// })

function fun(){
    let condn=true;
    return new Promise(function(resolve, reject){
        if(condn){
            resolve("data")
        }else{
            reject("error")
        }
    })
}

fun()
.then(msg=>{
    console.log("you are in 1st then")
    return msg;
})
.catch
