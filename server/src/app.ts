import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes'
import { DATABASE } from './consts/config'

const app = express()
const port = 4000

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(router)

mongoose.connect(DATABASE.URI + DATABASE.NAME).then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
}).catch((error) => {
  console.error(error)
})
