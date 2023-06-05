import express, { Application } from 'express'
import cors from 'cors'
import { UserRoute } from './app/modules/users/users.routes'
import globalErrorHandler from './app/middleware/globalErrorHandler'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', UserRoute)

// global error handler
app.use(globalErrorHandler)

export default app
