const { default: mongoose } = require("mongoose");



const NodesSchema = new Schema({
 title:{
    type:string,
    required:true
 },
 describe:{
    type:string,
    required:true
 },
tag:{
    type:string,
    default:"gental"
},
 date:{
    type:Date,
    default:Date.now
 }
});
module.exports=mongoose.model('Nodes',NodesSchema)