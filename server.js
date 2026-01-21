import express from "express";
import bodyParser from "body-parser";
import { getUsers, getUserById, createUser, updateUser, deleteUser, getUsersAPI, getUsersPage, getAppointment, createAppointment } from './queries.js';




//-------------------------------
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/agenda", (req, res) => {
    res.render("schedule.ejs")
})

app.get('/users', getUsers)
app.get('/users/:id', getUserById)
app.get('/cantores', getUsersPage)
app.post('/users', createUser)
app.get('/appointments', getAppointment)
app.post('/appointments', createAppointment)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)


// No seu arquivo de rotas:
app.get('/api/cantores', getUsersAPI);    // Para API
app.get('/cantores', getUsersPage);       // Para página web


app.listen(port, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, "
            + "and App is listening on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    }
);