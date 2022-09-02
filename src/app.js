const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('TEST')
})

app.post('/users', async (req, res) => {
  const { password, username } = req.body
  if (!password || !username) {
    return res.status(401).json({ errors: [{ message: 'Unauthorized' }] })
  }

  return res.status(200).json({ userId: 1, username })
})

module.exports = app
