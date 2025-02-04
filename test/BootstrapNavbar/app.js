import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'static')));
app.use("/node_modules", express.static(join(__dirname, '../../node_modules')));

app.get('/', (req, res) => {
    res.sendFile("static/html/index.html", { root: __dirname });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});