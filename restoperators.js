function showNumbers(...numbers){
    console.log(numbers)
}
showNumbers(10,20,30,40)




function collectMarks (...marks){
    console.log(marks);

}
collectMarks(20,10,20,30,45,60,100);
collectMarks(100,200,300,400)


const Numbers =(a,...numbers)=>{
    /* console.log(a);
    console.log(numbers); */

    let sum =0;
   /*  for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
        console.log(sum);

    } */

        for(const num of numbers){
            sum+=num;
           // console.log(num);
        }
        //return sum;
    console.log(sum);
}

Numbers("ranjith",10,20,40,55,);




//Finding Largest Number 

const largestNumber=(...numbers)=>{
    console.log(Math.max(...numbers))

}
largestNumber(100,10,20,30,50);


//Storing multiple Names

let storeNames =(item,...names)=>{
    console.log("Item:",item);
    console.log(names)
   

}
storeNames("laptop","hp","vivo","redmi");



//Employe Salaries
let tatalSalary=(...salaries)=>{
    let total =salaries.reduce((sum,total)=>
        sum+total)
    return total;

}
console.log(tatalSalary(90000,10000));


//Rest Parameters With Normal Parameters

let studentNames=(student1,...students)=>{
    console.log(`Intelligent Student in class :${student1}`);
    console.log(students);

}
studentNames("Ranjith","ramu","raki","sai");



const Students =(...users)=>{
    console.log(users.length);

}
Students({name:"ranjith",age:20},
    {name:"raki",age:25});
