const express = require('express')

var app = express()
app.use(express.static(__dirname + '/public' ))

app.get('/', (request, response) => {
  // response.send('<h1>hello express!</h1>')
  response.send({name: 'roger',
  likes: ['juggling', 'hockey']})
})


app.get('/bad', (req, res) => {
  res.send({error: 'bad request'})
})


app.listen(3000, () => console.log('server is running port 3000'))
