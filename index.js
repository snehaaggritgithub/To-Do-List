const express=require('express');
const path=require('path');
const port=8000;

const db=require("./config/mongoose");
const WorkItem=require("./models/workItem");

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static("assets"));

app.get('/',function(req,res){

    WorkItem.find({},function(err,work_items){
        if (err) {
            console.log("Error fetching the work items from DB");
            return;
        }
        return res.render("home", {
            title:"To-Do List",
            work_items:work_items,
        })
    });

app.post("/create-item",function(req,res){

WorkItem.create(
    {
        item:req.body.item,
        description:req.body.description,
    },
    function (err,newWorkItem) {
        if (err) {
            console.log("Error in creating a work item");
            return;
        }
        return res.redirect("back");
    }
)

});

app.get ("/delete-item/",function (req,res){
let id=req.query.id;

WorkItem.findByIdAndDelete(id,function(err){

if (err){
    console.log("Error in deleting");
    return;
}
return res.redirect("back");
});
});

app.listen(port,function(err){

    if (err) {
        console.log("Error in running server",err);
    }
    console.log("Server is running at port:",port);
});

























