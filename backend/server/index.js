const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cartRoute = require('./api/routes/carts');
const adminRoute = require('./api/routes/admin');
const homeRoute = require('./api/routes/home');
const passport=require('passport');
// const url = require('url');
var config = require('./api/config');
const Url = config.mongoUrl

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(Url);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT || 3003;

app.use(passport.initialize());

app.use('/api/cart', cartRoute);
app.use('/api/admin', adminRoute);
app.use('/api/home', homeRoute);


app.listen(PORT, () => {
    console.log(`Server listen from ${PORT}.....`);
});
 