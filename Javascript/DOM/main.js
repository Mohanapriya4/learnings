const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
// view1.style.display= "none";
const allview = document.getElementsByClassName("view");
console.log(allview);
const allview1 = document.querySelectorAll(".view");
console.log(allview1);
const alldiv = document.getElementsByTagName("div");
console.log(alldiv);
const alldiv1 = document.querySelectorAll("div");
console.log(alldiv1);
const evendivs = document.querySelectorAll("div:nth-of-type(2n)");
console.log(evendivs);
for(i=0;i<evendivs.length;i++){
    evendivs[i].style.width="150px";
    evendivs[i].style.backgroundColor="green";
}
const content = document.querySelector("nav h1");
console.log(content)
content.textContent = "Hello all";
const navcontent = document.querySelector("nav");
navcontent.innerHTML = "<h1>Mohana</h1> <p>Hello </p>";
navcontent.style.justifyContent="space-evenly";
//navigating through elements
console.log(evendivs[0].parentElement);
console.log(evendivs[0].parentElement.children);
//to create a full page
view2.style.display= "flex";
console.log(view2.lastElementChild);
view2.lastElementChild.remove();

const newPage = (parent, iter)=>{
const newDiv = document.createElement("div");
parent.append(newDiv);
newDiv.textContent=iter;
newDiv.style.backgroundColor="white";
newDiv.style.width="100px";
newDiv.style.height="100px";
newDiv.style.color="black";
newDiv.style.display="flex";
newDiv.style.justifyContent="center";
newDiv.style.alignItems = "center";
newDiv.style.flexWrap="wrap";
newDiv.style.margin="10px";
}

for(i=1;i<11;i++){
    newPage(view2,i);
}






