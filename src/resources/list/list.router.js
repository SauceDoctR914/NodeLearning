import controllers from './list.controllers'
import { Router } from 'express'

const controller = (req, res) => {
  res.send({ message: 'list routes' })
}
const router = Router()

router
  .route('/')
  .get(controller)
  .post(controller)
  .put(controller)
  .delete(controller)

router
  .route('/:id')
  .get(controller)
  .post(controller)
  .put(controller)
  .delete(controller)

export default router
