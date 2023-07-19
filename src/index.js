const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
  <head>
  <title>Page Title</title>
  </head>
  <body>
  
  <h1>Kyle Shropshire's Sample Web Project</h1>
  <p>Continue to Bio</p>
  <a href="/bio">go to bio</a>
  
  </body>
  </html>`)
})

app.get('/bio', (req, res) => {
    res.sendFile(__dirname + "/pages/bio.html")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})