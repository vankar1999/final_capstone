const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

app.get("/",(request,response) =>{
    response.json({
        "message": "Hello World"
    })
})

app.use(cors());

app.use(function (req, res) {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})