const express = require('express');
const checkListRouter = require('./src/routes/checklist.js');

const app = express();
app.use(express.json());

app.use('/checklist', checkListRouter);

app.listen(3000, () => {
    console.log('Server ON')
})