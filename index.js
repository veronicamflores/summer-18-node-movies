let express = require('express');
let bp = require('body-parser');
let server = express();
let movies = require('./movies')
let port = 8080

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))



//create an endpoint for getting a list of movies
server.get('/movies', (req, res, next)=>{
  res.send(movies)
})
//create an endpoint for finding a movie by its index
server.get('/movies/index/:id', (req, res, next) =>{
  let movie = movies.find(m => m.id == req.params.id)
  if(movie){
    return res.send(movie)
  }
  return res.status(400).send({
    error: 'no movie'
  })
})
//create an endpoint for finding a movie by its title
server.get('/movies/title/:title', (req, res, next) => {
  let movie = movies.find(m => m.name == req.params.title)
  if (movie) {
    return res.send(movie)
  }
  return res.status(400).send({
    error: 'no movie'
  })
})

//create an endpoint for finding all movies by their years
server.get('/movies/year/:year', (req, res, next)=>{
  let movie = movies.find(m => m.year == req.params.year)
  if(movie){
    return res.send(movie)
  }
  return res.status(400).send({
    error: 'no movie'
  })
})
//create an endpoint for finding all by rating
//create an endpoint for finding all by tags







server.listen(port, () => {
  console.log("Movies can be found at port: ", port)
})