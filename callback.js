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







//Student Details 
function checkResult(name ,callback){
    console.log(`${name} 's result is ready`);
    callback()
}
function showGrade(){
    console.log(`Grade A`);
}
checkResult("ranjith",showGrade);


//Shopping App

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
getUser(displayUser);




