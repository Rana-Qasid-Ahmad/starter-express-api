const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path');
const filesPath = path.join(__dirname, "files");
const dbConnect = require('./dbConnect')
const postModel = require("./postModel")

dbConnect()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/', async(req, res) => {
        const { title, content } = req.body;
        try {
            const newPost = await postModel.create({ title, content });
            res.json(newPost);
        } catch (error) {
            res.status(500).send(error)
        }
    })
    // app.get('/', (req, resp) => {
    //     resp.sendFile(`${filesPath}/index.html`)
    // })

// app.get('/login', (req, resp) => {
//     resp.sendFile(`${filesPath}/form.html`)
// })


app.listen(process.env.PORT || 3000)