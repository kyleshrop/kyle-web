const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
})

app.get('/bio', (req, res) => {
    res.sendFile(__dirname + "/pages/bio.html")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})