//Destructuring is extract the values from the array and objects then assign to variables

//Swap two values of two variables
let a=10;
let b=20;

[a,b]=[b,a];
console.log(a)
console.log(b)


//Swap two elements in Array

const colors=['red','green','blue','black','white'];

[colors[0],colors[4]]=[colors[4],colors[0]];
console.log(colors);




//Assign the Elements to v ariables

const items=['red','green','blue','black','white'];

[first2,second2,third,...extraitems]=items;
console.log(first2);
console.log(second2);
console.log(third);
console.log(extraitems);


//destructuring //extract values from the object
/* const person1={
    name:'ranjith',
    age:20,
    job:'hero'
}

const person2={
    name:'ranjith kumar',
    age:25,
    
}
const {name,age,job}=person2;  //if job not in person2 is shows undefined
console.log(name);
console.log(age);
console.log(job); */

//destructuring in function  parameters
function displayPerson({name,age,job}){
   console.log(`[${name} ${age} ${job}]`)

}



const person11={
    name:'ranjith',
    age:20,
    job:'hero'
}

const person22={
    name:'ranjith kumar',
    age:25,
    
    
}
displayPerson(person11)
displayPerson(person22)

//Destructuring of array
const Allstudents =["ball","basket","mask","book"];

[one,two,three]=Allstudents;
console.log(one);
console.log(two);
console.log(three);



const add =[1,2,3,4,5];
[first1,second1]=add;

console.log(first1 ,second1);
console.log(`${first1},${second1}`);


//Example 1 Without destructuring Commanly used in API response
const person1={
    name:'Ranjith',
    age:20
}
console.log(person1.name);
console.log(person1.age);


//Example 2 After Destructuring 
let person ={
    name:"ranjith",
    age:20
}
let {name,age}=person;
console.log(name);
console.log(age);



//Example 3 Array destructuring

let array=[1,2,3,4,5,6,7,8,9];

let firstNumber=array[0];
console.log(firstNumber);


let text ="javaScript";
let updatedText =text.slice(0,4);
console.log(updatedText);


//function parameter without destructuring

function displayUser(user){
    console.log(user.name);
    console.log(user.age);
}
displayUser({
    name:"Ranjith Kumar",
    age:20
});

//with Destructuring function parameters

function displayUsers({name,age}){
    console.log(name);
    console.log(age);

}// Very commonly used in React.js and Node.js
displayUsers({
    name:"Rakesh",
    age:20
});


//Array destructuring 
let colorss=['red','blue','green','black'];

let [first,second,...extracolors]=colorss;
console.log(first);
console.log(second);
console.log(extracolors);








