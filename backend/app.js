import express from 'express'
const app = express()

const port = process.env.MIPUERTO || 3000

// parte aplicacion
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// parte base de datos
app.get('/db', (req, res) => {
  res.send('base de datos!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
