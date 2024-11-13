// console.log("first");
// setTimeout(()=>{
//     console.log("second")
// },2000)
// console.log("third");

const newPromise = new Promise((resolve,reject)=>{
    const error = false;
    if(!error){
        resolve("Problem resolved");  
    }
    else{
        reject("Problem rejected")
    }
    
})

const myNextPromise = new Promise((resolve,reject)=>{
    setTimeout(function(){
          resolve("My new promise");
    },3000)
})

myNextPromise.then(value =>{
    console.log(value);
    
})

console.log(newPromise);
newPromise
.then(value=>{
   return value + " welcome"; 
})
.then(newValue =>{
    console.log(newValue);  
})
.catch(err=>{
    console.log(err);  
})


