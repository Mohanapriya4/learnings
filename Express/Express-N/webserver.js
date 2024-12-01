const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandling')
const corsOptions = require('./Config/corsOptions')
const PORT = process.env.PORT || 3500
//---------------------------------------------------------------
//Custom middleware
app.use(logger)
// app.use((req,res,next)=>{
//     logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`)
//     console.log(`${req.method} ${req.url}`);
//     next()
// })
//----------------------------------------------------------------
//third-party middleware-Cross origin resource sharing(cors)
app.use(cors(corsOptions))
//----------------------------------------------------------------
//Built-in middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public')))
//-----------------------------------------------------------------
//Using route as middleware
app.use('/',require('./routes/root'))
app.use('/subdir',require('./routes/subdir'))
app.use('/employees',require('./routes/api/employees'))
//------------------------------------------------------------------
// app.get('/hello(.html)?',(req,res,next)=>{
//     console.log("Tried to execute hello.html")
//     next() 
// },(req,res)=>{
//     res.send('hi hello')
// })

// const one = (req,res,next)=>{
//     console.log("one");
//     next()
// }
// const two = (req,res,next)=>{
//     console.log("two");
//     next()
// }
// const three = (req,res,next)=>{
//     console.log("three");
//     res.send('Finished')
// }

// app.get('/chain(.html)?',[one,two,three])
//------------------------------------------------------------------
// app.get('/*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// })

app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }
    else if(req.accepts('json')){
        res.json({"error":"404 error"})
    }    
    else{
        res.type('txt').send("404 Not found")
    }
})

app.use(errorHandler)

app.listen(PORT,()=>{console.log(`Server is listening on port ${PORT}`)})