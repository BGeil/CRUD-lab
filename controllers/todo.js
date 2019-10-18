const express = require(`express`)
const router = express.Router()
const Todo = require(`../models/todo.js`)

//routes
// new route
router.get(`/new`, (req, res) => {
		res.render(`new.ejs`)
})
// create route
router.post(`/`, (req, res) => {
	Todo.create(req.body, (err, todo) => {
		if (err) {
			res.send(err)
		} 
		else {
			console.log(`this is the create route working`);
			res.redirect(`/todo`)
		}
	})
})

// index route

router.get(`/`, (req, res) => {
	Todo.find({}, (err, todos) => {
		if (err) {
			res.send(err)
		} 
		else {

			res.render(`index.ejs`, {
				todos: todos
			})
		}
	})

	
})


// show route

router.get(`/:id`, (req, res) => {
	Todo.findById(req.params.id, (err, todo) => {
		if (err) {
			res.send(err)
		} 
		else {
 			res.render(`show.ejs`, {
 				todo: todo
 			})
		}
	})
})








module.exports = router;