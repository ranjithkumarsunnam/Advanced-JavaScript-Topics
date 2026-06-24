let array =["apple","mango","blue","red","green"];
console.log(...array);

//without spreadoperators 
let arr1=[1,2,3,4,5,6];
let arr2=arr1;
arr2.push(7,8);
console.log(arr1);


let arr3=[1,2,3,4];
let arr4=[...arr3];
arr4.push(5,6)
console.log(arr3)
console.log(arr4)

//spreadoperators

let frontend=["HTML","CSS","JS"];
let backend=["node.js","mongoDB"];

let fullstack=[...frontend,...backend];
console.log(fullstack);


//spreadoperators

let numbers =[1,2,3,4];
let updatedNumbers=[...numbers,5,6];
console.log(updatedNumbers);



//objects spreadoperators

let person ={
    name:"Ranjith",
    age:20,
    job:"frontend"
}

let copyPerson ={...person};
console.log(copyPerson);


let num ={
    a:1,
    b:2,
    c:3
}
console.log(Object(num));



//Merging Two Objects 

let personInfo={
    name:"Ranjith"
}
let jobInfo={
    role:"Developer"
}

let user ={
    ...personInfo,...jobInfo
}

console.log(user);



//Maximun Number
let maximum =[10,80,100,60];
let max=Math.max(...maximum);
console.log(max);
