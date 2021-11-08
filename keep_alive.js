const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Gohan is Alive!'));

app.listen(port, () => console.log(`Gohan is listening to http://localhost:${port}`));

