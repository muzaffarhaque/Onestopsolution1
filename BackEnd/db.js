const mongos=require('mongoose')
const mongoURL='mongodb://localhost:27017'

let conntetToMongos = ()=>{
    mongos.connect(mongoURL,()=>{
        console.log("connetction is sussfully");
    })
}
module.exports=conntetToMongos;