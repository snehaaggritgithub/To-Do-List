const mongoose=require("mongoose");

const workItemSchema=new mongoose.Schema({

    item: {
        type: String,
        required:true
    },
    description: {
        type:String,
        require:true
    }
});

const WorkItem=mongoose.model("WorkItem",workItemSchema);

module.exports= workItem;