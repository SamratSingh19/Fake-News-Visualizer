const express=require("express");
const app=express();
const path=require("path");
const fs=require("fs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    
    res.render("index");
});
app.get("/enterText",(req,res)=>
{
    res.render("enterText");
});
app.get("/enterMatrix",(req,res)=>
{
    res.render("enterMatrix");
});

// app.get('/CollegeMsg', (req, res) => {
//   const data = fs.readFileSync('adjacencyMatrix.json', 'utf8');
//   const matrix = JSON.parse(data);

//   res.render('showGraph', {adjList: JSON.stringify(matrix)}); // pass to EJS
// });

app.post("/submitText",(req,res)=>{
    let adjList=(req.body.adjList);
    // console.log(adjList,111);
    res.render("showGraph",{adjList:adjList});
});

app.post("/showGraphRedness", (req, res) => {
    const adjList = (req.body.adjList);
    const nodes = (req.body.nodes);
    // console.log(req.body,188);
    res.render("showGraphRedness", { adjList, nodes });
});

app.post("/showEdgesList",(req,res)=>{
    const adjList = (req.body.adjList);
    const nodes = (req.body.nodes);
    const sourceNode=req.body.sourceNode;
    // console.log(req.body);
    res.render("showEdgesList", { adjList, nodes,sourceNode });
});
app.listen(3000);
