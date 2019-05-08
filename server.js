const express = require("express");
const DbService = require("./Database/DatabaseService");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "Static"))

//Page Paths
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Client/index.html");
})

//Post
app.post("/api/v1/signup", (req,res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    if(!Username && !Password){
        if(DbService.GetAsync(Username)){
            DbService.SetAsync(Username, {Username: Username, Password: Password, Balance: 0})
        } else {
            res.status(400);
            res.send("Username has been taken")
        }
    } else {
        res.status(400);
        res.send("No username and password");
    }

})
app.listen(PORT, () => {
    console.log(`Connected on port: ${PORT}`);
})