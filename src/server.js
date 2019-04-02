import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { signup, signin, protect } from './utils/auth'
import { connect } from './utils/db'
import userRouter from './resources/user/user.router'
import itemRouter from './resources/item/item.router'
import listRouter from './resources/list/list.router'

export const app = express()
const router = express.Router()
app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ me: 'hi gavin' })
})

router
  .route('/cat')
  .get()
  .post()

router
  .route('/cat/:id')
  .get()
  .post()

app.use('/api', router)
//middleware to use router
// app.post('/signup', signup)
// app.post('/signin', signin)
// app.use('/api', protect)
// app.use('/api/user', userRouter)
app.use('/api/item', itemRouter)
app.use('/api/list', listRouter)

const log = (req, res, next) => {
  console.log('logging')
  req.mydata = 'hello'
  next()
}
app.get('/', (req, res) => {
  res.send({ data: req.mydata })
})

app.post('/', (req, res) => {
  res.send({ message: 'ok' })
})

app.get('/data', (req, res) => {
  res.send({ data: [1, 2, 3] })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send({ ok: true })
})

export const start = () => {
  app.listen(3003, () => {
    console.log('server is on 3003')
  })
}
