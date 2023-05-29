import express, { Application } from 'express'
import cors from 'cors'
import { UserRoute } from './app/modules/users/users.routes'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', UserRoute)

export default app
