const express = require('express')

const PORT = process.env.PORT || 4000
const app = express()

app.listen(PORT, () => {
  console.log(`Connected to db and listening on port ${PORT}`)
})
