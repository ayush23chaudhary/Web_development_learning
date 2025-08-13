import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/about', (req, res) => {
    res.render('index');
}
);

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

// app.get('*', (req, res) => {
//     res.send('404 Not Found');
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});