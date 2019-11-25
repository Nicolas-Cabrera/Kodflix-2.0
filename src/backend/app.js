const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello Gideon'));
app.listen(port, () => console.log(`Example ${port}`));
