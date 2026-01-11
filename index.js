import express from "express";
import bodyParser from "body-parser";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './queries.js';




//-------------------------------
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index.ejs")
})


app.get('/users', getUsers)
app.get('/users/:id', getUserById)
app.post('/users', createUser)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)


app.listen(port, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, "
            + "and App is listening on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    }
);