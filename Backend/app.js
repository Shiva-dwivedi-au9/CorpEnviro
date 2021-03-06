const express = require('express')
const app = express()
const db = require('./db')
const port = process.env.PORT || 5400
const cors = require('cors')
app.use(cors())

const AuthController = require('./controller/authControler')
app.use('/api/auth', AuthController)

app.get('/', (req, res) => {
    return res.send("Attendence Server Running Fine")
})

app.listen(port, (err, data) => {
    if (err) throw err
    console.log(`server is running on port ${port}`)
 })