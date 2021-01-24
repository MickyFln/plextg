import express = require('express')
import multer = require('multer')
const upload = multer()
// Initialize express and define a port
const app = express()
const PORT = 3000

app.post('/event', upload.none(), (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end()
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
