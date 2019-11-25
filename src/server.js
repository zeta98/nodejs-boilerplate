import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import config from './config'
import userRouter from './routes/user'
import authMiddleware from './api/authMiddleware'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/users', userRouter)

app.use(authMiddleware)

export const start = () => {
  const { apiPort } = config

  app.listen(apiPort, () => {
    console.log(`Server listening on PORT ${apiPort}`)
  })
}
