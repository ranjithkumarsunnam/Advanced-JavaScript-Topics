console.log(3 + true);

//Arrow Functions 

const greet =(name)=> `Hello ${name}`;
console.log("Ranjith");


//Square Number 

const square =(num)=> num*num;
   
console.log(square(5));



//Sum of Numbers

const addNum =(a,b)=> a+b;
console.log(addNum(5,10));




//Even or Odd

const isEven =(number)=> number%2===0;
console.log(`Number is Even ${isEven(8)}`);


//Multiply

const multiply =(x,y)=> x*y;
console.log(`Multiplication of Numbers ${multiply(2,9)}`);



//Template Literals

var name= "Ranjith";
console.log(`Hello ${name}`);

var age = 22;
console.log(`I am ${age} years old!`);

//sum of num

let a =10;
let b=20;
console.log(`Sum of two numbers ${a+b}`);

//product 

let product ="laptop";
let cost =5000;

console.log(`${product} cost is ${cost}`);


let city ="Hyderabad";
console.log("Welcome to city" +" "+city);


//Function calling in Literals

function calling (name){
    return `Welcome ${name}`;

}
console.log(`${calling("Ranjith")}`);

//Multiline String

let text=`HTML
CSS
Javascript`;
console.log(text);


let texts=(name)=>{
    
    return 
    `HTML
    CSS
    JavaScript${name}`;
}
texts();


//Array Values

let array =['red','blue','black','green','volite'];
for(let i=0; i<array.length; i++){


//if(array[i]=="volite"){
//console.log(array[0]);
//}
// return array[i];


// console.log("colors in Array:"+array);
}
console.log("colors in Array:"+array);


let numbers =[1,2,3,4,5,6,7];
numbers.forEach(element => {
    console.log(element);
    
});
//console.log(numbers);
