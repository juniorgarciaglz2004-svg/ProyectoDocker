import express from 'express'
import cors from 'cors'
import usuarios from './rutas/usuarios.js'
import indice from './rutas/index.js'
import config from './servicios/config.js'

const app = express()


app.use(cors()) 
app.use(express.json())


app.use('/', indice)
app.use('/usuarios', usuarios)

app.listen(config.appPort, () => {
  console.log(`Example app listening on port ${config.appPort}`)
})