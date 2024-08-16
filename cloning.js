
///////////SPREADCLONING////////////

// let src = {
//     age : 12,
//     weight : 68,
//     Height : 180
// };
// let dest = {...src};

// src.age = 90; 
// console.log("src: ", src);
// console.log("dest: ", dest); 



// obj.color = "white";

// console.log(obj)  


////////////////////ASSIGNCLONING///////////////


let src = {
    age : 12,
    weight : 68,
    Height : 180
};
src.age = 90;
let des = Object.assign({}, src);

console.log("src: ", src);
console.log("dest: ", des);



////////////ITERATION CLONING//////////


let src = {
    age : 12,
    weight : 68,
    Height : 180
};

let dest = {};
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
}