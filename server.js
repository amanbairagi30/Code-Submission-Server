const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
require('dotenv').config();
// require("./config/dbconfig")
const codeRoutes = require("./routes/codeRoutes")

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { 
    res.send("Get is successful!");
});


app.use("/api",codeRoutes);


app.listen(port, () => {
    console.log("listening on port , server is up and running");
})