
//Callback Hell
function GoodMorning(name,callback){
    console.log(`Good morning ${name}`);
    callback();
}
function sayHello(callback){
    console.log(`Hello, Welcome to the world of javascript`);
    callback();
}
function sayGoodnight(callback){
    console.log(`Good Night`);
    callback();
}

GoodMorning("Ranjith",()=>{
    sayHello(()=>{
        sayGoodnight(()=>{
            console.log(`Have a nice day!`);
        })
    })
})



//Online Shopping Example
function login( username, password, callback){
    setTimeout(()=>{
         console.log(`Checking Username and Password`);
    },1000)
    callback();
}
function payment(callback){
    console.log(`Processing Payment`);
    callback();
}
function makePayment(callback){
    console.log(`Paymentsucessful`);
    callback();
}
function placeOrder(callback){
    console.log(`Order Placed`);
    callback();
}

login("Ranjith",12345,function(){
    payment(function(){
        makePayment(function(){
            placeOrder(function(){
                console.log(`Order Placed Sucessfully`);
            })

        })

    })

})



function GoodMorning(name,callback){
    console.log(`Good morning ${name}`);
    callback();
}
function sayHello(callback){
    console.log(`Hello, Welcome to the world of javascript`);
    callback();
}
function sayGoodnight(callback){
    console.log(`Good Night`);
    callback();
}

GoodMorning("Ranjith",()=>{
    sayHello(()=>{
        sayGoodnight(()=>{
            console.log(`Have a nice day!`);
        })
    })
})

