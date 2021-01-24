import express = require('express')
import bodyParser = require('body-parser')

// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing
// app.use(bodyParser.json())

app.post('/event', (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end()
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
