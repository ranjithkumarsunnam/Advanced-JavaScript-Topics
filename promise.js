/* let promise = new Promise((resolve,reject)=>{
    let paymentDone =true;
    if(paymentDone){
        resolve("Payment Sucessful");
    }
    else{
        reject("Payment Failed");
    }
});
    promise.then((result)=>{
        console.log(result);
    })
    promise.catch((error)=>{
        console.log(error);
    }) */


    /* let promise1 =new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Promise resolved after 3 seconds");
        },3000)
    })
    promise1.then((result)=>{
        console.log(result);
    }) */



    //realTime Example

   /*  function orderFood(){
        return new Promise((resolve,reject)=>{
            let orderPlaced = true;
            if(orderPlaced){
                setTimeout(()=>{
                    resolve("Food Delivered");
                },3000)
               
            }
            else{
               setTimeout(()=>{
                 reject("Food Not Delivered");
               },3000)
            }
        });
    }
    orderFood()
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    }); */




    /* function login(username,password){
        return new Promise((resolve,reject)=>{
            if(username==="Ranjith" && password===12345){
                resolve("Login Sucessful");
            }
            else{
                reject("login Failed");
            }
        });
    }
    login("Ranjith",12345)
    .then((message)=>{
        console.log(message);
        })
        .catch((error)=>{
            console.log(error);
        }) */



//BankBalance Example
/* function checkBalance(amount){
    return new Promise((resolve,reject)=>{
        if(amount>=1500){
            resoleve("transaction Approved");
        }
        else{
            reject("Insufficient Balance");
        }
    })
}
checkBalance(500)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);

}) */

//File Downloading Example

/* function downloadFile(filename){
    return new Promise((resolve)=>{
        console.log(`Downloading ${filename}`);
        setTimeout(()=>{
            resolve(`${filename} Download Sucessfully`);
        },3000)
    })
}
downloadFile("file1.txt")
.then((filename)=>{
    console.log(filename);
}) */





//Student Results


function checkResult(marks){
    return new Promise((resolve,reject)=>{
        if(marks>=35){
            resolve("Pass");
        }
        else{
            reject("fail");
        }
    })
}
checkResult(50).then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})


 

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








