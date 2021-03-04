const express = require('express');
const app = express();

// Renders pages
app.set('port', process.argv[2]);

app.get('/', (req, res) => {
    res.render('main.html');
});

app.get('/sitePage1', (req, res) => {
    res.render('sitePage1.html');
});

app.get('/sitePage2', (req, res) => {
    res.render('sitePage2.html');
});

app.get('/sitePage3', (req, res) => {
    res.render('sitePage3.html');
});

app.get('/sitePage4', (req, res) => {
    res.render('sitePage4.html');
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((req, res) => {
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log('Express started on: ' + app.get('port') + '. Press Ctrl+C to terminate.');
});