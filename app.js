const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`)

require(`./db/db.js`)

//middleware
app.use(bodyParser.urlencoded({extended: false}))

const routerController = require(`./controllers/todo.js`)

app.use(`/todo/`, routerController);



















const PORT = 3000;
app.listen(PORT, () => {
	console.log(`made an app`);
})