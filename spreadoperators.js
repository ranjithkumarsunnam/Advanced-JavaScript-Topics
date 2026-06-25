let array =["apple","mango","blue","red","green"];
console.log(...array);

//without spreadoperators 
let arr1=[1,2,3,4,5,6];
let arr2=arr1;
arr2.push(7,8);
console.log(arr1);


let arr3=[1,2,3,4];
let arr4=[...arr3];
arr4.push(5,6)
console.log(arr3)
console.log(arr4)

//spreadoperators

let frontend=["HTML","CSS","JS"];
let backend=["node.js","mongoDB"];

let fullstack=[...frontend,...backend];
console.log(fullstack);


//spreadoperators adding new data

let numbers =[1,2,3,4];
let updatedNumbers=[...numbers,5,6];
console.log(updatedNumbers);



//objects spreadoperators

let person ={
    name:"Ranjith",
    age:20,
    job:"frontend"
}

let copyPerson ={...person};
console.log(copyPerson);


let num ={
    a:1,
    b:2,
    c:3
}
console.log(Object(num));



//Merging Two Objects 

let personInfo={
    name:"Ranjith"
}
let jobInfo={
    role:"Developer"
}

let user ={
    ...personInfo,...jobInfo
}

console.log(user);



//Maximun Number
let maximum =[10,80,100,60];
let max=Math.max(...maximum);
console.log(max);



//Adding new User (API)

const Users =[
    {id:1, name:"ranjith"},
    {id:2 ,name:"rakesh"}
];
const newUser={id:3,name:"saiTeja"};

const UpdatedUsers={...Users,newUser};
console.log(UpdatedUsers);



//Updating UserProfile

const user1={
    name:"ramu",
    age:20,
    role:"Developer",
    city:"HYD"
}

const updateUser={
    ...user1,
    city:"VIZ"
};

console.log(updateUser)



//Merge Requested Data

const dbData={
    id:1,
    name:"Sai"
}

const requestedData={
    city:"Hyderabad",
    age:25
}

const UpdatedData ={
    ...dbData,...requestedData
};//Used in API processing Requests

console.log(UpdatedData);


//Sending API Response

const user2={
    id:1,
    name:"Ranjith",
};

const response={
    success:true,
    ...user2
};
console.log(response);

//Combining the Products In DataBase

const mobiles=["iphone","Samsung"];
const laptops=["Dell, HP"];

const products =[...mobiles,...laptops];
console.log(products);


//Loggin Request Information

/* const request={
    userId:"ranjith",
    action:"LOGIN"
};
const log={
    timestamp:Data.now(), ...request
}
console.log(log); */



//DataBase Example 

const userInfo={
    _id:1,
    name:"Ramudu",
    age:"undifined",
    job:"protect"
}
//Received from frontend

const ReceivedInfo={
    job:" Save the nature"
}
const UpdatedUsers1={
    ...userInfo,...ReceivedInfo
};

console.log(UpdatedUsers1);