const express = require(`express`)
const router = express.Router()
const Todo = require(`../models/todo.js`)

//routes

router.get(`/new`, (req, res) => {
		res.render(`new.ejs`)
})

router.post(`/`, (req, res) => {
	Todo.create(req.body, (err, todo) => {
		if (err) {
			res.send(err)
		} 
		else {
			console.log(`this is the create route working`);
			res.redirect(`/new`)
		}
	})
})











module.exports = router;