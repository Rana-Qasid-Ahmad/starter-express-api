const express = require('express')
const app = express()
const mongoose = require('mongoose')
const DB = 'mongodb+srv://zrana1791:QasidRana@cluster0.xopx0j9.mongodb.net/?retryWrites=true&w=majority'
const path = require('path');
const filesPath = path.join(__dirname, "files");

mongoose.connect(DB).then(() => {
    console.log("DataBase Connected")
}).catch((err) => {
    console.log("Database Not Connected")
})

app.get('/', (req, resp) => {
    resp.sendFile(`${filesPath}/index.html`)
})

app.get('/login', (req, resp) => {
    resp.sendFile(`${filesPath}/form.html`)
})


app.listen(process.env.PORT || 3000)