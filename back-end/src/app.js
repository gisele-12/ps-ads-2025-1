<<<<<<< HEAD
// Carregando as variáveis de ambiente do arquivo .env
import dotenv from 'dotenv'
dotenv.config()

=======
>>>>>>> 36697adf93b94dbd8dd7789964af32ee90720f5c
import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
<<<<<<< HEAD

const app = express()

// Configurando o CORS para aceitar requisições a partir
// dos servidores configurados na variável de ambiente
// ALLOWED_ORIGINS
import cors from 'cors'
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS.split(','),
  // credentials: true
}))

=======
import usersRouter from './routes/users.js'

const app = express()

>>>>>>> 36697adf93b94dbd8dd7789964af32ee90720f5c
app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
<<<<<<< HEAD

//------------------- ROTAS ---------------------------

// Middleware de verificação de autorização
import authMiddleware from './middleware/auth.js'
app.use(authMiddleware)

import customersRouter from './routes/customers.js'
app.use('/customers', customersRouter)

import carsRouter from './routes/cars.js'
app.use('/cars', carsRouter)

import usersRouter from './routes/users.js'
=======
>>>>>>> 36697adf93b94dbd8dd7789964af32ee90720f5c
app.use('/users', usersRouter)

export default app
