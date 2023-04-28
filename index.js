const express = require('express')
const app = express()
const path = require('path');
const filesPath = path.join(__dirname, "files");

app.get('/', (req, resp) => {
    resp.sendFile(`${filesPath}/index.html`)
})

app.get('/login', (req, resp) => {
    resp.sendFile(`${filesPath}/form.html`)
})


app.listen(process.env.PORT || 3000)