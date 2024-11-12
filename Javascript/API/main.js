document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("completed");  
        initApp();
    }
})

const initApp=()=>{
    const Object = {
        name: "priya",
        array1 : ["earn", "grow", "give"],
        nameis : function(){
          console.log(`my name is ${this.name}`);
          
        }
    }

    window.sessionStorage.setItem("mySessionStorage",JSON.stringify(Object));
    const session = JSON.parse(sessionStorage.getItem("mySessionStorage"));
    console.log(session);
    
}