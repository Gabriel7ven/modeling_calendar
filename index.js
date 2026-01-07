import express from "express";
import bodyParser from "body-parser";
import pgPromise from "pg-promise"

// const pgp = pgPromise();
// const db = pgp('postgres://username:password@host:port/database')

// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })


const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index.ejs")
})




app.listen(port, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, "
            + "and App is listening on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    }
);