function greet(name,callback){
    console.log("hello");
    callback();
}
function sayBye(){
    console.log("GoodBye!");
}
greet("ranjith",sayBye)


//CallBack Functions

function display(callback){
    console.log("Welcome")
    callback();
}
function message(){
    console.log("Have A Nice Day");
}
display(message)


//Callback with Parameter

function calculator(a,b,operation){
    operation(a,b);
}
function add(x,y){
    console.log(x+y);
}
calculator(2,3 ,add);


//Anonymous Callback

function Greet(callback){
    console.log("Hi");
    callback();
}
Greet(function(){
    console.log("Welcome");
})


//Arrow Function 

function Gree(callback){
    console.log("Hello");
    callback();
}
Gree(()=>{
    console.log("Good Morning");
});