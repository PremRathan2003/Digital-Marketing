const express = require('express');
const mysql = require ('mysql');
const cors = require('cors');

const app = express()
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: "blogdb"
}
)

const servicesdb = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: "servicesDB"
}
)

app.get('/', (re, res) => {
    return res.json("From Backend side");
})

app.get('/blog_posts', (req, res) => {
    const sql = "SELECT * FROM blog_posts";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/blog_posts/:id', (req, res) => {
    const postId = req.params.id;
    const sql = "SELECT * FROM blog_posts WHERE id = ?";
    db.query(sql, postId, (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) {
            return res.status(404).json({ message: "Blog post not found" });
        }
        return res.json(data[0]);
    });
});

app.get('/services', (req, res) => {
    const sql = "SELECT * FROM services";
    servicesdb.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/services/:id', (req, res) => {
    const postId = req.params.id;
    const sql = "SELECT * FROM services WHERE id = ?";
    servicesdb.query(sql, postId, (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) {
            return res.status(404).json({ message: "Services post not found" });
        }
        return res.json(data[0]);
    });
});

app.listen(8001, () => {
    console.log("Listening");
})