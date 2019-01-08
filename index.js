// import your node modules
const express = require('express');
const cors = require('cors');

const db = require('./data/db.js');

// add your server code starting here

const server = express();

server.use(express.json());
server.use(cors());

server.get('/api/posts/', (req, res) => {
    db
        .find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(() => {
            res.status(500).json({ "error": 'The posts information could not be retrieved.' })
        });
    })

server.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;

    db
        .findById(id)
        .then(post => {
            {post.length > 0 ? 
                res.status(200).json(post) : 
                res.status(404).json({ "error": 'The post information could not be retrieved.' })
            }
        })
        .catch(() => {
            res.status(500).json({ "error": 'The posts information could not be retrieved.' })
        });
})

server.post('/api/posts', (req, res) => {
    const postData = req.body;
    
    if (postData.title.length >= 1 && postData.contents.length >= 1){
        db
            .insert(postData)
            .then(newPost => {
                res.status(201).json(newPost);
            })
            .catch(() => {
                res.status(500).json({ "error": 'There was an error while saving the post to the database' });
            });
    } else {
        res.status(400).json({ "errorMessage": 'Please provide title and contents for the post.' })
    }
})

server.listen(5000, () => console.log('Server Running...'))