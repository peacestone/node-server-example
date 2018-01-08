const express = require('express')
const hbs = require('hbs')

var app = express()
app.use(express.static(__dirname + '/public' ))

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear())
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')


app.get('/', (request, response) => {
  // response.send('<h1>hello express!</h1>')
  response.render('index.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to homepage'
  })
})


app.get('/bad', (req, res) => {
  res.send({error: 'bad request'})
})


app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'about page',
  })
})




app.listen(3000, () => console.log('server is running port 3000'))
