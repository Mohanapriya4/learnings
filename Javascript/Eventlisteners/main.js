//how an event handler occur
// // h2.addEventListener(event,func,addcapture) - syntax
// const addSomething=()=>{
//     alert("do something");
// }
// h2.addEventListener("click", addSomething, false);
// h2.removeEventListener("click",addSomething,false);
// //anonymous func
// h2.addEventListener("click", (event)=>{
//     console.log(event.target);
// })

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
      console.log("complete");
      initApp();
    }
})

//addcapture, event.stoppropagation
// const initApp=()=>{
//     const view = document.querySelector("#view2");
//     console.log(view);
//     const div = view.querySelector("div");
//     console.log(div);
//     const h2 = div.querySelector("h2")
//     console.log(h2);
//     view.addEventListener("click",(event)=>{
//         view.style.backgroundColor="purple";  
//     },true)
//     div.addEventListener("click",(event)=>{
//         div.style.backgroundColor="blue";
//         event.stopPropagation();
//     },true)
//     h2.addEventListener("click",(event)=>{
//         h2.textContent="Subscribed";
       
//     },true)
// }

//toggle, classlist & toggle in text
const initApp=()=>{
    const view = document.querySelector("#view2");
    console.log(view);
    const div = view.querySelector("div");
    console.log(div);
    const h2 = div.querySelector("h2")
    console.log(h2);
    view.addEventListener("click",(event)=>{
        view.classList.toggle("purple");
        view.classList.toggle("darkblue")
    })
    div.addEventListener("click",(event)=>{
        div.classList.toggle("blue");
        div.classList.toggle("black")
    })
    h2.addEventListener("click",(event)=>{
      const h2Text = event.target.textContent;
      h2Text==="subscribe"? event.target.textContent="subscribed..":
      event.target.textContent="subscribe";
    })
}

// //this is for view 3 form
// const initApp=() => {
//      const view3 = document.querySelector("#view3");
//      const myForm = view3.querySelector("#myForm");
//      myForm.addEventListener("submit", (event)=>{
//         console.log("submittedd");
//         event.preventDefault();
//      })
// }

//for view2 to display give display:none to view1 and view3 and also command the index part of view3
//for view3 to display give display:none to view1 and view2 and also command the index part of view2
