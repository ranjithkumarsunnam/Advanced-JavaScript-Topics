/* setTimeout(()=>{
    console.log("Hello Function after function....")

},2000); */


//setInterval 
/* let count=1;
let timer = setInterval(()=>{
    console.log(count);
    count++;

    if(count>5){
        clearInterval(timer);
    }
    
},1000); */


let furites =['apple','mango','grapes','pappaya'];
furites.forEach(fruit=>{
    console.log(fruit);
});

let numbers=[1,2,3,4,5,6];
let square=numbers.map((num)=>{
    return num*num;
});
console.log(square);


let Number =[10,15,20,25,30];
let evenNumber=Number.filter((num)=>{
    return num%2==0;

});
console.log(evenNumber);


//find()

let ages=[12,15,18,22];
let adult=ages.find((age)=>{
    return age>=18;
})
console.log(adult);


//Custom Callback Function 

function process(callback){
    console.log("processing....");
    callback();

}
process(()=>{
    console.log("Task Processing....");
});


//CallBack

function greet(callback){
    console.log("ranjith");
    callback()

}
greet((name)=>{
    console.log(`Hello ${name}`)
});




//
function payment(callback){
    console.log(`Processing payment...`)
    callback();

    setTimeout(()=>{
        console.log(`Payment Successful....`);
    },1000)

}
payment(()=>{
    console.log("Order Configuration")
});


//calculating discounted price
let prices=[1000,2000,3000];
let discount =prices.map(function(price){
    return price*0.9;
})
console.log(discount);

//downloading files
function download(callback){
    console.log("Downloading File....");
    callback();
    setTimeout(function(){
        console.log("Download Complated....")
    },2000);
}
download(function(){
    console.log("opening File....")
})

//stuedts passed 

const  Students =[{
    name:"A",marks:40},{name:"B",marks:50},{name:"C",marks:30}];
    let passedStudents = Students.filter(function(student){
        return student.marks>=40;

    })
    console.log(passedStudents);

    //OTP verified

    function verifiedOTP(callback){
        console.log(" Verifing OTP.......");
        setTimeout(function(){
            console.log("OTP Verified....")
            callback();

        },2000)
    }
    verifiedOTP(function(){
        console.log("Login SuccessFul");
    })

















