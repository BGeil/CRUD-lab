const express = require(`express`)
const router = express.Router()

//routes

router.get(`/new`, (req, res) => {
		res.render(`new.ejs`)
})












module.exports = router;