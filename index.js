const express = require('express')
const cors = require('cors')

//Middleware
const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5001
app.get('/', (req, res) => {
    res.send("Basic server setup done")
})
app.post('/addcoffee', (req, res) => {
    const newCoffee = req.body;
    res.send(newCoffee)
    console.log(newCoffee)
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})