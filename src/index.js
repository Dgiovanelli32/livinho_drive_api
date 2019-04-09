const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
//using mlab for free (without docker) 
mongoose.connect('mongodb://dgiovanelli:DGio3010!@ds127655.mlab.com:27655/livinho-backend',{
    useNewUrlParser: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//using morgan to catch logs
app.use(morgan('dev'));



app.use(require('./routes'));

app.listen(3000, () => console.log('Escutando na porta 3000..'));