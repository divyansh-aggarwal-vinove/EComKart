const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const mongoose = require('mongoose');
//const adminRoute = require('./api/routes/admin');
const productRoute = require('./api/routes/products');
const dictionaryRoute = require('./api/routes/dictionary');
const cartRoute = require('./api/routes/carts');
const url = require('url');



mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://mostafiz:mostafiz044@ds243344.mlab.com:43344/accounting');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT || 3000;


//app.use('/api/admin', adminRoute);
app.use('/api/products', productRoute);
app.use('/api/dictionary', dictionaryRoute);
app.use('/api/cart', cartRoute);

app.listen(PORT, () => {
    console.log(`Server listen from ${PORT}.....`);
});


