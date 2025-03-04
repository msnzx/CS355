const express = require('express'),
  app = express()

app.use(express.static('public'))

app.get('/breeds', (req, res) => {
  res
    .contentType('application/json')
    .status(200)
    .send({
      message: {
        african: [],
        airedale: [],
        australian: [],
        buhund: [],
        bulldog: [],
        greyhound: []
      }
    })
})

const images = {
  african: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  airedale: ['1.jpg', '2.jpg', '3.jpg'],
  australian: ['1.jpg', '2.jpg', '3.jpg'],
  buhund: ['1.jpg', '2.jpg', '3.jpg'],
  bulldog: ['1.jpg', '2.jpg', '3.jpg'],
  greyhound: ['1.jpg', '2.jpg', '3.jpg']
}

app.get('/image/:breed', (req, res) => {
  const { breed } = req.params

  if (breed in images && images[breed]?.length > 1) {
    res
      .status(200)
      .contentType('application/json')
      .send({
        status: 'success',
        message:
          'http://localhost:3000/img/' +
          `${breed}/${getRandomItemFromArray(images[breed])}`
      })
  } else {
    res.status(404).send({ message: 'Breed not found', status: 'error' })
  }
})


app.listen(3000, () => {
  console.log('Listening on port 3000: http://localhost:3000')
})

const randInt = (n) => Math.floor(n * Math.random()) // returns random integer between 0 and n, not including n
const getRandomItemFromArray = (arr) => arr[randInt(arr.length)] // returns a random item from an array
