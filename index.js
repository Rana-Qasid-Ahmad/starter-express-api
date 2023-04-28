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
app.get('/register', async(req, resp) => {
    resp.sendFile(`${filesPath}/register.html`);

})
app.post('/register', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const newPost = await postModel.create({ username, password, email });
        res.json(newPost);
    } catch (error) {
        res.status(500).send(error)
    }
})
app.get('/users', async(req, res) => {
        try {
            const post = await postModel.find();
            res.json(post);
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