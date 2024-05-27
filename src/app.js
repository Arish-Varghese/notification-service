const express = require('express');
const app = express();
const notificationRoutes = require('./routes/notificationRoutes');

app.use(express.json());
app.use('/api/notifications', notificationRoutes);

module.exports = app;
