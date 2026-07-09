// 09-07-2026
//Login Details
function login (){
    return new Promise(function(resolve,reject){
        console.log("Logging in...");
        setTimeout(()=>{
            let sucess =true;
            if(sucess){
                resolve("Login SucessFull");
            }
            else{
                reject("Login Failed");
            }
        },2000)
    })
}

//Get Profile
function getProfile(){
    return new Promise((resolve,reject)=>{
        console.log("Fetching Details...");
        setTimeout(()=>{
            resolve("Profile Loaded");

        },2500)
    })
}

//LogOut

function LogOut(){
    return new Promise((resolve,reject)=>{
        console.log("Logging Out");
        setTimeout(function(){
            resolve("LogOut Sucessfully...");
        },3000)
    })
}

login()
.then(function(result){
    console.log(result);
    return getProfile();
})
.then(function(result){
    console.log(result);
    return LogOut();
})
.then(function(result){
    console.log(result);
    console.log("All Operations Complated....")
})
.catch(function(error){

console.log(error);
console.log("Invalid Login Details")
})


//Login 
function login(){
    return new Promise((resolve,reject)=>{
        console.log("Logging In......")
        setTimeout(()=>{
            resolve({name:"ranjith",subscription:false});
        },2000)
    })
}

//Check subscription

function checkSubcription(user){
    return new Promise((resolve,reject)=>{
        console.log("Checking subscription");
        setTimeout(()=>{
            if(user.subscription){
                resolve(user)
            }
            else{
                reject("subscription Expried");
            }
        },2000)
    })
}

//Watch Movie

function watchMovie(user){
    return new Promise((resolve,reject)=>{
        console.log("Loding Movie....")
        setTimeout(()=>{
            resolve(`${user.name} is Watching`);

        },5000)
    })
}

login()
.then(checkSubcription)
.then(watchMovie)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error)
})
