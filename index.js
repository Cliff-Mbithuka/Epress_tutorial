const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
res.send('Hello word!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));