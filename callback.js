/* function greet(name,callback){
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

function sendEmail(email,callback){
    console.log(`Sending email to ${email}`);
    callback();
}
function emailsent(){
    console.log("Email sent successfull!");
}
sendEmail("ranjithkumar@gmail",emailsent);


//online food Order

function placeOrder(item,callback){
    console.log(`${item} order Successfully ` );
    callback();
}
function preparingOrder(){
    console.log("Preparing Food...");
}
placeOrder("pizza",preparingOrder);


//ATM Withdrawal

function withDraw(amount,callback){
    console.log(`Withdrawing amount ${amount}`);
    callback();
}
function printRecipt(){
    console.log("Printing receipt...");
}
withDraw(5000,printRecipt);

//Shopping App

function addCart(product,callback){
    console.log(`${product} added to cart`);
    callback();
}
function checkout(){
    console.log(`Proceeding to checkout....`);
}
addCart("laptop",checkout);


//Booking Ticket 

function bookingTicket(movie,callback){
    console.log(`${movie} ticket is Booked`);
    callback();
}
function Review(){
    console.log("Movie is Blockblaster......");
}
bookingTicket("RRR",Review);


//currentBill
function payBill(amount,callback){
    console.log(`This mount currentBill ${amount}`);
    callback();
}
function receipt(){
    console.log("receipt is generated...")
}
payBill(500,receipt); */






/* 
//Student Details  parameter name and callback function
function checkResult(name ,callback){
    console.log(`${name} 's result is ready`);
    callback()
}
function showGrade(){
    console.log(`Grade A`);
}
checkResult("ranjith",showGrade);


//Shopping App with parameter

function addCart(product,callback){
    console.log(`${product} is Added to cart`);
    callback();
}
function checkout(){
    console.log(`Proceeding to checkout`);
}
addCart(`laptop`,checkout);


function sendOTP(callback){
    console.log(`Sending OPT`);
    callback();
}
setTimeout(()=>{
    console.log(`OPT Sent`);
    callback();
},2000);

function verifyOTP(){
    console.log("Please verify your OTP");
}
sendOTP(verifyOTP);

//Download File

function downloadFiles(callback){
    console.log("Download file....")
    setTimeout(()=>{
        console.log("download Complated");
    },3000)
}
function openfile(){
    console.log(`Opening File.......`);
}
downloadFiles(openfile)





//Database User
function getUser(callback){
    console.log(`Feching user.....`);
    setTimeout(()=>{
        console.log("User Found ");
        callback();
    },2000)
}
function displayUser(){
    console.log("displaying user Details");
}
getUser(displayUser); */


//02/07/2026

//User Registration 

function registeruser(name,callback){
    console.log("Registering User.....");

    setTimeout(()=>{
        console.log(name +  " registerd Successfully");
        callback(name);
    },2000)
}

function sendWelcomeEmail(name){
    console.log( "Welcome Email sent to " +name);
}
registeruser("ranjith",sendWelcomeEmail);


//Login --> Fetch Profile

function login(username,callback){
    console.log("Checking Login");
    setTimeout(function(){
        console.log("Login SuccessFull");
        callback(username);
    },1000);
}
function fetchProfile(username){
    console.log("Fetching profile"+username);
}
login ("Ranjith",fetchProfile);





//Back Transations 

function withdraw(amount,callback){
    console.log("Checking balance");
    setTimeout(function(){
        console.log("👌"+amount + " WithDraw");
        callback(amount);

    },1000)
}
function sendMsg(amount){
    console.log("SMS",amount,"Debited");
}
withdraw(5000,sendMsg);


//E-Commerce Order

function placeOrder(product,callback){
    console.log("Order Received ");
    setTimeout(()=>{
        console.log(product +" packed");
        callback(product);

    },2000);
}
function shopOrder(product){
    console.log(product ,"shipped");
}
placeOrder("Laptop" , shopOrder);



function getUser(id,callback){
    console.log("Seaching Database");
    setTimeout(()=>{
        let user={
            id:id,
            name:"Ranjith"
        }
        callback(user);
    },2000)
}
function displayUser(user){
    console.log(user)
}
getUser(101,displayUser);




//Multiple Callbacks 

function uploadFile(file,callback){
    console.log("Uploading "+file);
    setTimeout(()=>{
        console.log("Upload Complated");
        callback(file)
    },1000);
}
function saveDatabase(file){
    console.log(file +" saved in database")

}
uploadFile("resume.pdf",saveDatabase);





//Callback with success failer(Node.js Pattern) is pattern is used in node.js

function login(username,password,callback){
    if(password==="1234"){
        callback(null,"Login Succesfull");
    }
    
    else{
        callback("Invalid Password",null)
    }
}
login("ranjith","1234",(error,result)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(result);
    }

});






