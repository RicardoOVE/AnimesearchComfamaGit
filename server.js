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

const express = require("express");
const cors = require("cors");
const app = express();

//Lets me use a different origin
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

//Import Routes
const myRoutes = require("./server/routes/anime.routes");
myRoutes(app);

//Launch server
app.listen(8000, ()=>console.log("Server running!"));