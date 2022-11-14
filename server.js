const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3001
app.use(cors())
app.use(express.static(path.resolve(__dirname, './build/')))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`frontend server listening to port ${PORT}`)
})