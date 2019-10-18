const express = require(`express`)
const router = express.Router()
const model = require(`../models/todo.js`)

//routes

router.get(`/new`, (req, res) => {
		res.render(`new.ejs`)
})

router.post(`/`, (req, res) => {
	console.log(`this is the create route`);
})











module.exports = router;