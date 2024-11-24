const fs = require('fs')
const path = require('path')
const rf = fs.createReadStream(path.join(__dirname,'file','bigfile.txt'),{encoding:'utf-8'})
const wf = fs.createWriteStream(path.join(__dirname,'file','new_bigfile.txt'))

// rf.on('data',(dataChunk)=>{
//     wf.write(dataChunk)
// })
rf.pipe(wf)