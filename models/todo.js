const mongoose = require(`mongoose`)


const todoSchema = new mongoose.Schema({
	name: String,
	notes: String,
	date: Date
})


const Todo = mongoose.model(`Todo`, todoSchema)







module.exports =  Todo;