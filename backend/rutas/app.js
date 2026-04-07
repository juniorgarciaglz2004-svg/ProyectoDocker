import express from 'express'
import usuarios from './usuarios.js'
import config from './config.js'
import db from './db.js'
const app = express()



app.use(express.json());

// parte aplicacion
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// parte base de datos
app.use('/usuarios', usuarios)

app.listen(config.appPort, () => {
  console.log(`Example app listening on port ${config.appPort}`)
})
