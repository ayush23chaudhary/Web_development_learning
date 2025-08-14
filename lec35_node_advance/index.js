const express= require('express');
const app = express();
const path = require('path');

// Blogs
const blogs = [{
    "id": 1,
    "title": "Blog 1",
    "content": "This is the content of blog 1"
}, {
    "id": 2,
    "title": "Blog 2",
    "content": "This is the content of blog 2"
}, {
    "id": 3,
    "title": "Blog 3",
    "content": "This is the content of blog 3"
}, {
    "id": 4,
    "title": "Blog 4",
    "content": "This is the content of blog 4"
}]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
// body parser middleware
app.use(express.urlencoded({ extended: true }));

let password = '12345';
app.use('/home',(req, res, next)=> {
    if (password === '12345') {
        next();
    }
    else {
        res.status(403).send('Forbidden: Invalid Password');
    }
});
app.get('/', (req, res) => {
    res.send('Hello connection established')
});

// CREATE
app.get('/blog/new', (req, res) => {
    res.render('blogs/new');
});
app.post('/blogs', (req, res) => {
    let { title, content }= req.body;
    blogs.push({id: blogs.length + 1, title, content});
    res.redirect('/blogs');
    });
// READ
app.get('/blogs', (req, res) => {
    res.render('blogs/index', { blogs });
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);

