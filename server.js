/*
npm init -y
"start": "nodemon server.js"
npm install express cors
create subfolders (server folders)

2nd terminal (react installation):
npx create-react-app client
cd client
npm install axios react-router-dom@5.3.0

npm start

1st terminal:
npm start

Front:
Add bootstrap in index.html
Remove <React.StrictMode> in index.js
*/


var createError = require('http-errors');
var express = require('express');
var cors = require('cors')

var animesRouter = require('./server/routes/anime.routes');

var app = express();

app.use(express.json());
app.use(cors())

app.use('/animes', animesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//Launch server
app.listen(8000, ()=>console.log("Server running!"));