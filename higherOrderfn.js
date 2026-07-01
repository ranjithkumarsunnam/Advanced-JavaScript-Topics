function greet(name){
    console.log("hello" + name)
}
function processUser(callback){
   // console.log("ranjith")
    callback(" Ranjith");
}
processUser(greet);

//Anonymous function

function calculate(a,b, operation){
    operation(a,b);
}
calculate(10,5,(x,y)=>{
    console.log(x+y);
})


//shopping online 

function processPayment(amount,successCallback){
    console.log("Processing payment.....")
    successCallback(amount);
}
processPayment(1000,function(amount){
    console.log("Payment " + amount + "sucessfull")
})

function printName(){
    console.log("Ranjith")
}
function start(callback){
    console.log(" Program Started")
    callback()
}
start(printName);

//return function 

function message(){
    return function(){
        console.log("Welcome");
    }
}
const result =message();
result();

//login example function 

function loginSucess(){
    console.log("Login Sucessfull");
}
function login(callback){
    console.log("Checking username.......");
    console.log("Checking password........");
    callback();
}
login (loginSucess);
