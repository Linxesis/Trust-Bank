//Modules
const express = require("express");

//Classes
require("./Classes/Person");
require("./Classes/Database");

//Main
const app = express();
const PORT = process.env.PORT || 5000;
const PersonDB = new Database("../Database/PersonDB.json");

app.use(express.static(__dirname + "Static"))

//Page Paths
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Client/index.html");
})

//Post
app.post("/api/v1/CreatePerson", (req,res) => {
    const AccountName = req.body.AccountName;

    if (AccountName){
        const Person = new Person(AccountName);
        PersonDB.AddData()
    } else {
        
    }
})
app.listen(PORT, () => {
    console.log(`Connected on port: ${PORT}`);
})