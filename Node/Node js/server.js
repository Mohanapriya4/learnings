//call back hell this should not done instead use async
// fs.writeFile(path.join(__dirname,'file','code.txt'),'Code hard! Life is never easy!',err=>{
//     if(err) throw err;
//     console.log("File written successfully");
//     fs.appendFile(path.join(__dirname,'file','file.txt'),'Welcome',(err=>{
//         if(err)throw err
//         console.log("appended successfully");
//         fs.rename(path.join(__dirname,'file','file.txt'),path.join(__dirname,'file','thanks.txt'),err=>{
//             if(err) throw err
//             console.log("renamed successfully");  
//         })
//     }))
// })
//-------------------------------------------------------------------------------
//asnyc await -(but this readfile,writefile,appendfile,rename,unlink these are used for small files not used for big files (not possible in realtime projects))
// const fsPromises = require('fs').promises
// const path = require('path')
// const file = async()=>{
// fsPromises.readFile(path.join(__dirname,'file','file.txt'),'utf-8')
//     try{
//     console.log("Read successfully");
//     fsPromises.writeFile(path.join(__dirname,'file','code.txt'),'Code hard! Life is never easy!')
//     console.log("Written successfully");
//         fsPromises.appendFile(path.join(__dirname,'file','file.txt'),'\n Welcome')
//         console.log("appended successfully");
//             fsPromises.rename(path.join(__dirname,'file','file.txt'),path.join(__dirname,'file','thanks.txt'))
//             console.log("renamed successfully"); 
//                 fsPromises.unlink(path.join(__dirname,'file','hi.txt'))
//                 console.log("deleted successfully"); 
//     }
//     catch(err){
//         console.error(err)
//     }
// }
// file()
//---------------------------------------------------------------------------------------
// process.on('uncaughtException',err=>{
//     console.log(`Error : ${err}`);
//     process.exit(1)  
// })
//----------------------------------------------------------------------------
//used in es6 mjs file - node server.mjs
// import{readFile} from 'node:fs'  
//-------------------------------------------------------------------------------
//basics of node js
// console.log("welcome");
// const { log } = require('console');
// const variable = require('os')
// console.log(variable.type());
// console.log(variable.version());
// console.log(variable.homedir());
// console.log(__dirname);
// console.log(__filename);
// console.log("-----------");
// const path = require('path')
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// const math = require('./math')
// console.log(math.add(2,2));







