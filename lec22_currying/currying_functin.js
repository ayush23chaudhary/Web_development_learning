// add(5)(3)(2);

// function add(a){
//     return function add2(b){
//         return function add3(c){
//             return a+b+c;
//         }
//     }
// }
// add(5)(3)(2);

// function add(a){
//     return function add2(b){
//         return function add3(c){
//             return function add4(d){
//                 return function add5(e){
//                     return a+b+c+d+e;
//                 }
//             }
//         }
//     }
// }
// console.log(add(6)(7)(5)(3)(2));

const allGlobalParcels =[
    {
        created:234567894000,
        location:"India",
        properties:{
            name:"Samsung"
        }
    },
    {
        created:234566694000,
        location:"Us",
        properties:{
            name:"Samsung"
        }
    },
    {
        created:234537894000,
        location:"India",
        properties:{
            name:"Samsung"
        }
    }
];

function sortParcelBycountry(data){
    return function country(country){
        const countryParcel= data.filter(d=>d.location==country);
        return function sorting(order){
            const sortedResult =[...countryParcel].sort((a,b)=>{
                if(order=="asc"){
                    return a.created-b.created;
                }
                return b.created-a.created
            })
            return sortedResult;
        }
    }
    
    
    
}
// console.log(sortParcelBycountry(allGlobalParcels,"India","asc"));
// console.log(sortParcelBycountry(allGlobalParcels,"India","dsc"));

let india=sortParcelBycountry(allGlobalParcels)("India");

console.log(india("asc"));
console.log(india("dsc"));



// let arr =["1","123","2","234","1111"];
// console.log(arr.sort(function(a,b){ return a-b}));


//creae function name createURL(BaseURL,Path)



