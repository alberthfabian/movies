const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');

const config = require('../config.js');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const category = require('./components/category/network');
const movie = require('./components/movie/network');
const paymethod = require('./components/paymethod/network');
const invoice = require('./components/invoice/network');
const invDetail = require('./components/inv-detail/network');
const schedule = require('./components/schedule/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');

// ROUER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/category', category);
app.use('/api/movie', movie);
app.use('/api/paymethod', paymethod);
app.use('/api/invoice', invoice);
app.use('/api/inv-detail', invDetail);
app.use('/api/schedule', schedule);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});