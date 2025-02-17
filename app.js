

const express = require('express');
const path = require('node:path');
const app = express();
const indexRouter = require('./routes/indexRouter.js');
const newRouter = require('./routes/newRouter.js');
const messageRouter = require('./routes/messageRouter.js');

// set EJS as template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Enable serving static files
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
// enable request variables 
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));