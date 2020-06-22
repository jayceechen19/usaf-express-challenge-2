const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(port, () => (`Server running on http://localhost:${port}/`))


const students = require('./students.json')

app.get('/', (req, res) => {
    res.send(students)
})
app.get()
