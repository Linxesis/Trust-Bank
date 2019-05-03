const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "Static"))

//Page Paths
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Client/index.html");
})

app.listen(PORT, () => {
    console.log(`Connected on port: ${PORT}`);
})