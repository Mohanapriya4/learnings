// console.log("first");
// setTimeout(()=>{
//     console.log("second")
// },2000)
// console.log("third");
//------------------------------------------------------------------------
// //Promise
// const newPromise = new Promise((resolve,reject)=>{
//     const error = false;
//     if(!error){
//         resolve("Problem resolved");  
//     }
//     else{
//         reject("Problem rejected")
//     }
    
// })

// const myNextPromise = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//           resolve("My new promise");
//     },3000)
// })

// myNextPromise.then(value =>{
//     console.log(value);
    
// })

// console.log(newPromise);
// newPromise
// .then(value=>{
//    return value + " welcome"; 
// })
// .then(newValue =>{
//     console.log(newValue);  
// })
// .catch(err=>{
//     console.log(err);  
// })
//------------------------------------------------------------------------
// //promise-pending
// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>{
//     return response.json();
// })
// .then(value=>{
//     value.forEach(element => {
//         console.log(element);
        
//     }); 
// })
// console.log(users);
//------------------------------------------------------------------------
// //await async
// const user ={
//     usersList : []
// }
// const users = async ()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     return userData;
//     // console.log(userData); 
// }

// const anotherdata = async()=>{
//     const data = await users()
//     user.usersList = data;
//     console.log(user);
    
//     return data;

// }
// anotherdata();
// console.log(user);
//------------------------------------------------------------------------
// //Get method 
// const user = async()=>{ 
//     const response= await fetch("https://icanhazdadjoke.com/",{
//     method:"GET",
//     headers: {
//         Accept : "application/json"
//     }
// })
// const storeData = await response.json();
// console.log(storeData);

// }
// user();
//------------------------------------------------------------------------
//post method
const Object1 = {
  id: "nrrj3TfFdxc",
  joke: "Why did the octopus beat the shark in a fight? Because it was well armed."
}

const user = async(userObj)=>{ 
    const response= await fetch("https://httpbin.org/post",{
    method:"POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(userObj)
})
const storeData = await response.json();
console.log(storeData);

}
user(Object1);






