console.log("hey hi")
//-----------------------------------------------------------
// let varName = "mohanapriya"
//string property-length (note: it is not a func)
// console.log(varName.length)
// console.log("Mohana".length)

//string methods-1.charAt 2.indexOf 3.lastIndexOf 4.slice
//5.toUpperCase 6.toLowerCase 7.includes 8.split
// console.log(varName.charAt(2))
// console.log(varName.indexOf("ap"))
// console.log(varName.lastIndexOf("a"))
// console.log(varName.slice(0,5))
// console.log(varName.toUpperCase())
// console.log(varName.toLowerCase())
// console.log(varName.includes("ri"))
// console.log(varName.split("p"))
//-------------------------------------------------------------
//Numbers
// let num = "23"
// console.log(num)
// console.log(Number(num))
// let num1=2
// let num2=23
// console.log(num1===num2)
// console.log(num===num2)
// console.log(num+3)
// console.log(num1+2)
// console.log(Number(false))
// console.log(Number(true))
// console.log(Number(false)+1)
// console.log(Number(true)+3)
// //Number methods
// console.log(Number.isInteger(num))
// let s1="12.45asap"
// console.log(Number.parseFloat(s1))
// console.log(Number.parseInt(s1))
// console.log(Number.parseFloat(s1).toFixed(1))
// console.log(s1.toString())
// let s2=678
// let s3="hello"
// console.log(Number.isNaN(s2))// false-bcoz we have given a number but
// // calling as isNaN saying it is not a number so false
// console.log(Number.isNaN(s3))
// console.log(isNaN(s3))//true- bcoz it is given an string which is not a integer
// console.log(isNaN(s2))
//-----------------------------------------------------------------------------------
// console.log("Mohanapriya".charAt(Math.floor(Math.random()*11)));
//----------------------------------------------------------------------------
// //if statement
// let spammer=false
// let viewer='js course'
// let reply;
// if(spammer){
//     reply='sorry'
// }
// else if(viewer){
//     reply=`Enjoy ${viewer}`
// }
// else{
//     reply='I am still working on it'
// }
// console.log(reply);
//-----------------------------------------------------------------------------------------------
// //switch case
// switch(1){
//     case 1:
//     console.log(1)
//     break
//     case 2:
//     console.log(2)
//     break
//     default:
//     console.log("no match");
// }
//---------------------------------------------------------------------------------
// //ternary operator - ?true:false
//single condition
// let person;
// let response= person? "welcome": "kindly subscribe"
// console.log(response);

//multiple condition
// let boy="stone";
// let girl="scissors";
// let response =
//  boy === girl? "Tie":
//  boy==="stone" && girl ==="paper"? "girl wins"
//  :boy==="paper" && girl ==="scissors"? "girl wins"
//  :boy==="scissors" && girl ==="stone"? "girl wins"
//  :"boy wins";
// console.log(response);
//-----------------------------------------------------------------------------------
//null coalescing operator-??
// let hey = prompt("enter your name:")
// if(hey){
// console.log(hey ?? "you didnt enter your name")}
// else{
//     console.log("you didnt enter")
// }

// const var1 = "2345.89";
// console.log(var1);
// console.log(Number(var1));
// console.log(Number.parseFloat(var1));
// console.log(Number.parseFloat(var1).toFixed(1))

// let var1 = prompt("Enter your name:");
// console.log(var1 )

let con=confirm("shall we play?")
