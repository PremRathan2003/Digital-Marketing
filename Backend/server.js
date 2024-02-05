const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: "",
  database: "blogdb"
});

const servicesdb = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: "",
  database: "servicesDB"
});

// Routes for handling GET requests
app.get('/', (req, res) => {
  return res.json("From Backend side");
});

app.get('/blog_posts', (req, res) => {
  const sql = "SELECT * FROM blog_posts";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

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
    if (err) return res.json(err);
    return res.json(data);
  });
});

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

app.post('/form_submissions', (req, res) => {
    const formData = req.body;
    const sql = "INSERT INTO form_submissions (name, email, message) VALUES (?, ?, ?)";
    servicesdb.query(sql, [formData.name, formData.email, formData.message], (err, result) => {
        if (err) {
            console.error("Error saving form data:", err);
            return res.status(500).json({ message: "Error submitting form. Please try again later." });
        }

        console.log("Form submitted successfully:", formData);
        return res.json({ message: "Form submitted successfully" });
    });
});

  db.connect((err) => {
    if (err) {
        console.error('Error connecting to blogdb:', err);
        return;
    }
    console.log('Connected to blogdb database');
});

servicesdb.connect((err) => {
    if (err) {
        console.error('Error connecting to servicesDB:', err);
        return;
    }
    console.log('Connected to servicesDB database');
});


const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
