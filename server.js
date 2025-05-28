// console.log("Hii\nHow are you?.")
const Express = require("express")
const Cors  = require('cors')
// const MongoDB = require("mongodb")
const Mongoose = require("mongoose")
const app = Express()
const Ports = 7000;

Mongoose.connect("mongodb://localhost:27017/portfoliobase")
.then(() => console.log("Successfully connected to MongoDB.."))
.catch((err) => console.log("Sorry, There was an issue connecting to Atlas", err))

app.use(Cors())
app.use(Express.urlencoded())
app.use(Express.json())

const EduSchema = Mongoose.Schema({
    school:{
        type: String,
    },
    location:{
        type: String,
    },
    year:{
        type: Number
    }        
})
const EduModel = Mongoose.model("schoolcollection", EduSchema)

const ProjectSchema = Mongoose.Schema({
    pro_name:{
        type: String,
    },
    pro_descript:{
        type: String
    },
    pro_link:{
        type: String
    },
   pro_skills:{
	type:Array
    }      
})
const ProjectModel = Mongoose.model("projectslist", ProjectSchema)

app.get("/", (req, res) => {
    EduModel.find()
    .then(result => {
        console.log(result)
        res.json(result)
    })
.catch(err => console.log(err))
})

app.get("/about", (req, res) =>{
    ProjectModel.find()
    .then(result => {
        console.log(result)
        res.json(result)
    })
.catch(err => console.log(err))
})
app.listen(Ports, ()=> console.log(`This server will run on port no. ${Ports}\n Thank you!.`))
