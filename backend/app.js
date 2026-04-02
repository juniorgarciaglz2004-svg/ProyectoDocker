import express from 'express'
import usuarios from './rutas/usuarios.js'
const app = express()

const port = process.env.MIPUERTO || 3000

app.use(express.json());

// parte aplicacion
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// parte base de datos
app.use('/usuarios',usuarios)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
