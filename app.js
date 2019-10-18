const express = require(`express`);
const app = express();






//middleware

const routerController = require(`./controllers/todo.js`)

app.use(`/todo/`, routerController);



















const PORT = 3000;
app.listen(PORT, () => {
	console.log(`made an app`);
})