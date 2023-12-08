const express = require('express');
const path = require('path');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');


app.use(express.static('views'));
app.get('/index.ejs', (req, res) => {
    res.render('home/index');
})
app.get('/introduction.ejs', (req, res) => {
    res.render('home/introduction');
})
app.get('/search.ejs', (req, res) => {
    res.render('home/search');
})
app.get('/main.ejs', (req, res) => {
    res.render('home/main');
})
app.listen(3000, () => {
    console.log('서버 가동')
})

app.use(express.static(path.join(__dirname, 'public')));