
/* ======================================================================================= NodeBuildIn */
const path = require('path');

/* ======================================================================================= NodeModules */
const express      = require('express');
const morgan       = require('morgan');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose     = require('mongoose');

/* ======================================================================================= External */
const config = require('./config/config.js');
const sample = require('./api/sample');

/* ======================================================================================= CreateWebServer & MiddleWare */
const app = express();
app.use(morgan('dev'));

/* ======================================================================================= Routes */
app.use('/api/sample', sample);

/* ======================================================================================= Listen */
app.listen(5656);
console.log('Gemstone\'s API Server Listening ... with port: 5656');
