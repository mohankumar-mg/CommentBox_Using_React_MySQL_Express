import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Your_UserName', //Replace with your mysql user name
    password: 'Your_Password', //Replace with your mysql password
    database: 'Your_Database_Name' // Replace with your mysql database name
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Database connected successfully');
});

app.post('/submit', (req, res) => {
    const { name, goal } = req.body;
    const query = 'INSERT INTO users (name, goal) VALUES (?, ?)';
    db.query(query, [name, goal], err => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Comment posted successfully');
})});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
