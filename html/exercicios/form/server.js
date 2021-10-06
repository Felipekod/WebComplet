const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: true}))


app.post('/usuarios', (req, respo) => {
    console.log(req.body)
    respo.send('<h1>Parabens</h1>')
})

app.post('/usuarios/:id', (req, respo) => {
    console.log(req.params.id)
    console.log(req.body)
    respo.send('<h1>Parabens. usuario alterado</h1>')
})

app.listen(3003)