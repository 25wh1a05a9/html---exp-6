
const express = require("express");
const app = express();
app.use(express.json());
let students = [
    {id: 1, name:"Nam", age:18},
    {id:2, name:"tham", age:19}
];

//get = reads all student data
app.get("/students",(req,res)=> 
{
    res.json(students);
});
//post- addss a student
app.post("/students",(req,res)=> {
    students.push(req.body);
    res.send("students Added");
});
//put-update a student
app.put("/students/:id",(req,res)=>
{
    let student = students.find(s=> s.id == req.params.id);
    if(student){
        student.name=req.body.name;
        student.age=req.body.age;
        res.send("student data updated");
    }
    else{
    res.send("student not found");
    
    }
}
);

//delette
app.delete("/students/id",(req,res)=>{
    students=students.filter(s=>s.id!=req.params.id);
    res.send("student deleted");
});
app.listen(3000,()=>
{
    console.log("server running on port http://localhost:3000");
});